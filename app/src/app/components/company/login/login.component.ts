import { Component, OnInit } from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/company/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
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
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/company/dashboard']);
    }
  }

  async onSubmit() {
    const { email, password } = this.companyLoginForm.value;
    if (!this.companyLoginForm.valid) {
      this.error = 'Invalid credentials';
      return;
    }
    try {
      const response: any = await this.authService.login(email, password);
      localStorage.setItem('token', response.token);
      this.router.navigate(['/company/dashboard']);
    } catch (error) {
      console.log(error);
      this.error = 'Invalid credentials';
    }
  }
}
