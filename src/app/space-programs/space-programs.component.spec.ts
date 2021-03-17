import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceProgramsComponent } from './space-programs.component';

describe('SpaceProgramsComponent', () => {
  let component: SpaceProgramsComponent;
  let fixture: ComponentFixture<SpaceProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceProgramsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
