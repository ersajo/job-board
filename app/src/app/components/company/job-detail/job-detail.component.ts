import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent {
  public updateIcon = faEdit;
  public deleteIcon = faTrash;
  public opportunity: any = {};
  public error: any;

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute,
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.error = 'Invalid job id';
      return;
    }
    this.getOpportunity(id);
  }

  private getOpportunity(id: string) {
    this.companyService.getOpportunity(id).subscribe({
      next: (response: any) => {
        this.opportunity = response;
      },
      error: (error) => {
        this.error = error;
      }
    });
  }
}
