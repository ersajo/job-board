import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public companyProfile: any = {}

  constructor(
    private companyService: CompanyService,
  ) { }

  ngOnInit(): void {
    this.companyService.getProfile().subscribe({
      next: (response: any) => {
        this.companyProfile = response;
      },
    });
  }
}
