import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public companyProfile: any = {}
  public openJobs: any = 0;

  constructor(
    private companyService: CompanyService,
  ) { }

  ngOnInit(): void {
    this.companyService.getProfile().subscribe({
      next: (response: any) => {
        this.companyProfile = response;
      },
    });
    this.companyService.getOpenJobs().subscribe({
      next: (response: any) => {
        console.log(response);
        this.openJobs = response.length;
      },
    });
  }
}
