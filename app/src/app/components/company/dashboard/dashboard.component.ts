import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company/company.service';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public companyProfile: any = {}
  public openJobs: any = 0;
  createOpportunityIcon = faPlusSquare;

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
        this.openJobs = response.length;
      },
    });
  }
}
