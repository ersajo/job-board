import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  public jobs: any = [];
  constructor(
    private companyService: CompanyService,
  ) { }

  ngOnInit(): void {
    this.companyService.getOpenJobs().subscribe({
      next: (response: any) => {
        this.jobs = response;
      },
    });
  }
}
