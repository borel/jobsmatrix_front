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
    this.myForm = this._fb.group({
      jobsCriterias: this._fb.array([
        this.initAddress(),
      ])
    });
  }

  initAddress() {
    return this._fb.group({
      name: ['Name'],
      realValue: ['Real Value'],
      ponderateValue: ['Ponderate Value'],
    });
  }

  addAddress() {
    const control = <FormArray>this.myForm.controls['jobsCriterias'];
    control.push(this.initAddress());
  }

  removeAddress(i: number) {
    const control = <FormArray>this.myForm.controls['jobsCriterias'];
    control.removeAt(i);
  }

  save(model: jobsCriteria) {
    // call API to save
    // ...
    console.log(model);
  }

}
