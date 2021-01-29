import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  public firstname: string;
  public lastname: string;
  public email: string;
  public password: string;
  public confirmpassword: string;
  private registerFormBuilder: FormGroup = new FormGroup({});
  constructor() {
    this.registerFormBuilder = this.formBuilder.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(8)]],
      confirmpassword: ["", [Validators.required, Validators.minLength(8)]]
    });
    ``;
   }

  ngOnInit() {
  }

}
