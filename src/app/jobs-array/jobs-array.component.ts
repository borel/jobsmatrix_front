import {Component, OnInit} from "@angular/core";
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import {jobsCriteria} from "./../jobCriteria";

@Component({
  selector: 'app-jobs-array',
  templateUrl: './jobs-array.component.html',
  styleUrls: ['./jobs-array.component.css']
})

export class JobsArrayComponent implements OnInit {

  public myForm: FormGroup;

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this.initCriteria();
  }

  initCriteria(){
    return this._fb.group({
      nameCriteria: ['Lieu'],
      companies: this._fb.array([
        this.initCompany(),
      ])
    });
  }
   initCompany() {
    return this._fb.group({
      nameCompany: [''],
      realValue: [''],
      ponderateValue: [''],
    });
  }

  addCriteria() {
    const control = <FormArray>this.myForm.controls['criterias'];
    control.push(this.initCriteria());
  }

  removeCriteria(i: number) {
    const control = <FormArray>this.myForm.controls['criterias'];
    control.removeAt(i);
  }


  addCompany() {
    const control = <FormArray>this.myForm.controls['company'];
    control.push(this.initCriteria());
  }

  removeCompany(i: number) {
    const control = <FormArray>this.myForm.controls['company'];
    control.removeAt(i);
  }

  save(model: jobsCriteria) {
    // call API to save
    // ...
    console.log(model);
  }

}
