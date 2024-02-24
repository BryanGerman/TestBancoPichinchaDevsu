import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../services/validators.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

  public afterOneYear = ""
  public nowDate = new Date()
  public now: string = this.tranformDate(this.nowDate);

  @ViewChild("release_date") release_date?: HTMLInputElement;


  public myForm: FormGroup = this._formBuilder.group({
    id: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    name: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
    description: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
    logo: ["", Validators.required],
    release_date: [this.now, Validators.required],
    revision_date: [{ value: this.tranformDate(this.nowDate), disabled: true }, Validators.required],
  })

  constructor(private _formBuilder: FormBuilder,
    private _validatorsService: ValidatorsService) { }
  isValidField(field: string) {
    return this._validatorsService.isValidField(this.myForm, field);
  }

  onSave(): void {
    console.log("click")
    for (let control in this.myForm.controls) {
      console.log(control)
      console.log(this.myForm.controls[control]["errors"])
    }
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

  }

  onChange(value: string) {
    let revision_date: Date = new Date(value);
    revision_date.setUTCFullYear((revision_date.getUTCFullYear()) + 1)
    this.afterOneYear = this.tranformDate(revision_date)
  }

  tranformDate(date: Date) {
    let _year = date.getFullYear()
    let _month = date.getMonth() < 10 ? "0" + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString();
    let _day = date.getDate() < 10 ? "0" + date.getDate().toString() : date.getDate().toString();
    return _year.toString() + "-" + _month + "-" + _day

  }

}
