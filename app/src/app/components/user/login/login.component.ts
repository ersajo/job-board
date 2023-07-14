import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/user/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: any;
  eyeIcon = faEye;
  eyeSlashIcon = faEyeSlash;
  showPassword = false;
  userLoginForm = this.formBuilder.group({
    email: '',
    password: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/user/dashboard']);
    }
  }

  async onSubmit() {
    const { email, password } = this.userLoginForm.value;
    if (!this.userLoginForm.valid) {
      this.error = 'Invalid credentials';
      return;
    }
    try {
      const response: any = await this.authService.login(email, password);
      localStorage.setItem('token', response.token);
      this.router.navigate(['/user/dashboard']);
    } catch (error) {
      console.log(error);
      this.error = 'Invalid credentials';
    }
  }
}
