import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import {jobsCriteria} from "./../jobCriteria";

@Component({
  selector: 'app-jobs-array',
  templateUrl: 'jobs-array.component.html',
})

export class JobsArrayComponent implements OnInit {
  public myForm: FormGroup;
  public myArrayForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      addresses: this._fb.array([
        this.initAddress(),
      ])
    });

    this.myArrayForm = this._fb.group({
      rows: this._fb.array([
        this.initRow(),
        this.initRow(),

      ]),
      columns: this._fb.array([
        this.initColumn(),
        this.initColumn(),

      ])
    });
  }

  initAddress() {
    return this._fb.group({
      street: ['', Validators.required],
      postcode: ['']
    });
  }



  addAddress() {
    const control = <FormArray>this.myForm.controls['addresses'];
    control.push(this.initAddress());
  }

  removeAddress(i: number) {
    const control = <FormArray>this.myForm.controls['addresses'];
    control.removeAt(i);
  }


  addColumn() {
    const control = <FormArray>this.myArrayForm.controls['columns'];
    control.push(this.initColumn());

    const control = <FormArray>this.myArrayForm.controls['rows'];
    control.push(this.initRow());
  }

  addRow() {
    const control = <FormArray>this.myArrayForm.controls['rows'];
    control.push(this.initRow());
  }

  initRow() {
    return this._fb.group({
      value: ['row'],
    });
  }

  initColumn() {
    return this._fb.group({
      value: ['column'],
    });
  }



  save(model: jobsCriteria) {
    // call API to save
    // ...
    console.log(model);
  }
}
