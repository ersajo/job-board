import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = `${environment.API_URL}/api/v1/users`
  public userProfile = new BehaviorSubject({});

  constructor(
    private httpClient: HttpClient,
  ) {
    this.profile().subscribe({
      next: (response: any) => {
        this.userProfile.next(response);
      },
      error: (error) => {
        this.userProfile.error(error);
      }
    })
  }

  getProfile() {
    return this.userProfile.asObservable();
  }

  private profile() {
    const token = localStorage.getItem('token');
    return this.httpClient.get(`${this.API_URL}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
  }
}
