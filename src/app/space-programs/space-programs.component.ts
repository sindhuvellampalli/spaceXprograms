import { Component, OnInit } from '@angular/core';
import { SpaceProgramsService } from '../services/space-programs.service';

@Component({
  selector: 'app-space-programs',
  templateUrl: './space-programs.component.html',
  styleUrls: ['./space-programs.component.css']
})
export class SpaceProgramsComponent implements OnInit {
  spaceData: any;
  launchData = null;
  landData = null;
  selectedYear = null;
  years = [
    [{
      id: 1,
      year: 2006,
      active: false
    },
    {
      id: 2,
      year: 2007,
      active: false
    }],
    [{
      id: 3,
      year: 2008,
      active: false
    }, {
      id: 4,
      year: 2009,
      active: false
    }],
    [{
      id: 5,
      year: 2010,
      active: false
    }, {
      id: 6,
      year: 2011,
      active: false
    }],
    [{
      id: 7,
      year: 2012,
      active: false
    },
    {
      id: 8,
      year: 2013,
      active: false
    }],
    [{
      id: 9,
      year: 2014,
      active: false
    },
    {
      id: 10,
      year: 2015,
      active: false
    }],
    [{
      id: 11,
      year: 2016,
      active: false
    },
    {
      id: 12,
      year: 2017,
      active: false
    }],
    [{
      id: 13,
      year: 2018,
      active: false
    },
    {
      id: 14,
      year: 2019,
      active: false
    }],
    [{
      id: 15,
      year: 2020,
      active: false
    }]
  ];
  launchArray = [
    {
      id: 1,
      isLaunched: true,
      active: false
    },
    {
      id: 2,
      isLaunched: false,
      active: false
    }
  ];
  landArray = [
    {
      id: 1,
      isLanded: true,
      active: false
    },
    {
      id: 2,
      isLanded: false,
      active: false
    }
  ];



  constructor(
    private spaceProgramService: SpaceProgramsService
  ) { }

  ngOnInit() {
    this.getAllSpaceData();
  }
  getAllSpaceData() {
    this.spaceData = null;
    this.spaceProgramService.getAllSpaceData().subscribe(data => {
      this.spaceData = data;
    })
  }

  getLaunchData(data) {
    this.launchArray.forEach(el => {
      el['active'] = false
    })
    var lunchedData = this.launchArray.find(ele => {
      if (ele.isLaunched === data) {
        return ele
      }
    });
    lunchedData['active'] = true;
    this.launchData = lunchedData.isLaunched;
    this.getData();
  }

  getLandData(data) {
    this.landArray.forEach(el => {
      el['active'] = false
    })
    var landedData = this.landArray.find(ele => {
      if (ele.isLanded === data) {
        return ele
      }
    });
    landedData['active'] = true;
    this.landData = landedData.isLanded;
    this.getData();
  }

  yearSelected(row) {
    var index;
    var rowindex;
    this.years.map((ele, ind) => {

      ele.map((e, i) => {
        if (e.id === row.id) {
          index = i;
          rowindex = ind;
        }
        e.active = false;

      })
    })
    console.log(this.years);
    console.log(index);
    this.years[rowindex][index]['active'] = true;
    this.selectedYear = this.years[rowindex][index]['year'];
    this.getData();
  }

  getData() {
    if (this.launchData !== null && this.landData === null && this.selectedYear === null) {
      this.spaceProgramService.getLaunchData(this.launchData).subscribe(data => {
        this.spaceData = data;
      })
    }
    if (this.launchData !== null && this.landData !== null && this.selectedYear === null) {
      this.spaceProgramService.launchAndLandData(this.launchData, this.landData).subscribe(data => {
        this.spaceData = data;
      })
    }
    if (this.launchData !== null && this.landData !== null && this.selectedYear !== null) {
      this.spaceProgramService.AllDataWithFilters(this.launchData, this.landData, this.selectedYear).subscribe(data => {
        this.spaceData = data;
      })
    }
  }

}
