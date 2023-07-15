import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService{
  private API_URL = `${environment.API_URL}/api/v1/company`;
  public companyProfile = new BehaviorSubject({});

  constructor(
    private httpClient: HttpClient,
  ) {
    this.profile().subscribe({
      next: (response: any) => {
        this.companyProfile.next(response);
      },
      error: (error) => {
        this.companyProfile.error(error);
      }
    });
  }

  getProfile() {
    return this.companyProfile.asObservable();
  }

  private profile() {
    const token = localStorage.getItem('token');
    return this.httpClient.get(`${this.API_URL}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  }
}
