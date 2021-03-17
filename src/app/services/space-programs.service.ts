import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { map, finalize, retry } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class SpaceProgramsService {

  constructor(
    private httpClient: HttpClient,
    private spinner: NgxSpinnerService
  ) { }
  private spaceData = "https://api.spacexdata.com/v3/launches?limit=100";

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getAllSpaceData() {
    this.spinner.show();
    return this.httpClient.get(this.spaceData, this.httpOptions).pipe(
      map(result => result),
      finalize(() => {
        this.spinner.hide();
      }));
  }

  getLaunchData(launch_success) {
    this.spinner.show();
    return this.httpClient.get(this.spaceData + "&launch_success=" + launch_success, this.httpOptions).pipe(
      map(result => result),
      finalize(() => {
        this.spinner.hide();
      }));;
  }

  launchAndLandData(launch, land) {
    this.spinner.show();
    return this.httpClient.get(this.spaceData + "&launch_success=" + launch + "&land_success=" + land, this.httpOptions).pipe(
      map(result => result),
      finalize(() => {
        this.spinner.hide();
      }));
  }

  AllDataWithFilters(launch, land, year) {
    this.spinner.show();
    return this.httpClient.get(this.spaceData + "&launch_success=" + launch + "&land_success=" + land + "&launch_year=" + year, this.httpOptions).pipe(
      map(result => result),
      finalize(() => {
        this.spinner.hide();
      }));;
  }

}
