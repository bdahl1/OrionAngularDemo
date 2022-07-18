import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-complex-form-new',
  templateUrl: './complex-form-new.component.html',
  styleUrls: ['./complex-form-new.component.scss']
})
export class ComplexFormNewComponent {
  formGroup: FormGroup;
  firstName: AbstractControl;
  middleName: AbstractControl;
  lastName: AbstractControl;
  desert: AbstractControl;
  breakfast: AbstractControl;
  lunch: AbstractControl;

  testVal: string;

  constructor(private fb: FormBuilder) { 
    this.formGroup = this.fb.group({
      firstName: ['Don', [Validators.required]],
      middleName: ['A', []],
      lastName: ['Tello', [Validators.required]],
      desert: ['no', [Validators.required]],
      breakfast: [false],
      lunch: [true],
    });
    this.firstName = this.formGroup.controls.firstName;
    this.middleName = this.formGroup.controls.middleName;
    this.lastName = this.formGroup.controls.lastName;
    this.desert = this.formGroup.controls.desert;
    this.breakfast = this.formGroup.controls.breakfast;
    this.lunch = this.formGroup.controls.lunch;
  }

}
