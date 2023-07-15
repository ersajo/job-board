import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private API_URL = `${environment.API_URL}/api/v1/company`;

  constructor(
    private httpClient: HttpClient,
  ) { }

  profile(token: string) {
    return this.httpClient.get(`${this.API_URL}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  }
}
