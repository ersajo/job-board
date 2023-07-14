import { Component } from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error: any;
  eyeIcon = faEye;
  eyeSlashIcon = faEyeSlash;
  showPassword = false;
  companyLoginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  onSubmit() {
    console.log(this.companyLoginForm.value);
    this.error = 'Invalid credentials'
  }
}
