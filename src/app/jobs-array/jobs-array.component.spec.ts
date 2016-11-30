/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JobsArrayComponent } from './jobs-array.component';

describe('JobsArrayComponent', () => {
  let component: JobsArrayComponent;
  let fixture: ComponentFixture<JobsArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
