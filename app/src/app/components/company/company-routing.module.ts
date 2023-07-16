import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { companyAuthGuard } from 'src/app/guards/company/auth.guard';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobFormComponent } from './job-form/job-form.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [companyAuthGuard],
  },
  {
    path: 'jobs',
    component: JobListComponent,
    canActivate: [companyAuthGuard],
  },
  {
    path: 'jobs/new',
    component: JobFormComponent,
    canActivate: [companyAuthGuard],
  },
  {
    path: 'jobs/:id',
    component: JobDetailComponent,
    canActivate: [companyAuthGuard],
  },
  {
    path: 'jobs/:id/update',
    component: JobFormComponent,
    canActivate: [companyAuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
