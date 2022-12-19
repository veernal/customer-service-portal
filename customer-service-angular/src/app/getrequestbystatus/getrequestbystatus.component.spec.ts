import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetrequestbystatusComponent } from './getrequestbystatus.component';

describe('GetrequestbystatusComponent', () => {
  let component: GetrequestbystatusComponent;
  let fixture: ComponentFixture<GetrequestbystatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetrequestbystatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetrequestbystatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
