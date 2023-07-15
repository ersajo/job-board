import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService{
  private API_URL = `${environment.API_URL}/api/v1/company`;
  public companyProfile = new BehaviorSubject({});
  public opportunities = new BehaviorSubject([]);

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
    this.getOpportunities().subscribe({
      next: (response: any) => {
        this.opportunities.next(response);
      },
      error: (error) => {
        this.opportunities.error(error);
      }
    });
  }

  getOpenJobs() {
    return this.opportunities.asObservable();
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

  private getOpportunities() {
    const token = localStorage.getItem('token');
    return this.httpClient.get(`${this.API_URL}/jobs`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  }
}
