import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = `${environment.API_URL}/api/v1/users`;

  constructor(
    private httpClient: HttpClient,
  ) { }

  login(email: any, password: any) {
    return this.httpClient.post(`${this.API_URL}/login`, {
      email,
      password
    });
  }
}
