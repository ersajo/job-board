import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = `${environment.API_URL}/api/v1/users`

  constructor(
    private httpClient: HttpClient,
  ) { }

  profile(token: string) {
    return this.httpClient.get(`${this.API_URL}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
  }
}
