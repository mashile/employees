import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from '../employee/employee.component';
import { DepartmentComponent } from '../department/department.component';
import { ProjectsComponent } from '../projects/projects.component';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

const appRouting: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'add-employee', component: AddEmployeeComponent}
  ];


@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forRoot(appRouting)
  ],
  declarations: [],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }