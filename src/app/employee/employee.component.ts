import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
// import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import {UpdateDialogComponent } from '../update-dialog/update-dialog.component';
 import {Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private _employeeService: EmployeesService,
  public dialog: MatDialog) {}

  ngOnInit() {
  }

  employees =[
    {id:1, empName:"Vusi",empSurname:"Ngomane",empPosition:"front-end Developer",empAge:19,   empImage:"https://images.pexels.com/photos/1648413/pexels-photo-1648413.jpeg?cs=srgb&dl=pexels-victoria-borodinova-1648413.jpg&fm=jpg"},
    {id:2, empName:"Lucky",empSurname:"Ndlami",empPosition:"Developer",empAge:20,empImage:"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg"},
    {id:3, empName:"December",empSurname:"Makhanya",empPosition:"Mobile Developer",empAge:24,empImage:"https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3775534.jpg&fm=jpg"},
    {id:4, empName:"Lwandle",empSurname:"Khoza",empPosition:"Developer",empAge:29,empImage:"https://images.pexels.com/photos/1081188/pexels-photo-1081188.jpeg?cs=srgb&dl=pexels-graham-wizardo-1081188.jpg&fm=jpg"},
    {id:5, empName:"Evans",empSurname:"Mabaso",empPosition:"Senior Developer",empAge:30,empImage:"https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3785077.jpg&fm=jpg"},
  
    {id:6, empName:"Goodman",empSurname:"Mhlongo",empPosition:"Back-end Developer",empAge:25,empImage:"https://images.pexels.com/photos/842569/pexels-photo-842569.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-842569.jpg&fm=jpg"},
    {id:7, empName:"Fayve",empSurname:"Malale",empPosition:"Devs Ops",empAge:31,empImage:"https://images.pexels.com/photos/903661/pexels-photo-903661.jpeg?cs=srgb&dl=pexels-tim-savage-903661.jpg&fm=jpg"},
    {id:8, empName:"Wandile",empSurname:"Nyoni",empPosition:"Developer",empAge:28,empImage:"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?cs=srgb&dl=pexels-stefan-stefancik-91227.jpg&fm=jpg"},
    {id:9,empName:"Thabo",empSurname:"Mbatha",empPosition:"Senior Developer",empAge:27,empImage:"https://images.pexels.com/photos/1445527/pexels-photo-1445527.jpeg?cs=srgb&dl=pexels-doug-bolton-1445527.jpg&fm=jpg"}
  ]

    
  // openDialog(empName) {
  //   const dialogRef = this.dialog.open(DialogComponent,{
  //     data:{
  //       message: 'Are you sure want to delete?',
  //       buttonText: {
  //         ok: 'Delete',
  //         cancel: 'No'
  //       }
  //     }
  //   });

  //   dialogRef.afterClosed().subscribe((confirmed: boolean) => {
  //     if (confirmed) {
  //       const index = this.employees.indexOf(empName,0)
  //       if (index >-1) {
  //         this.employees.splice(index,1);
  //       }
  //     }
  //   });
  // }

  get EmployeList() {
    return this._employeeService.getAllEmployee();
  }
  // updateDialog(id: number) {
  //    const EmployeeClass = this._employeeService.getAllEmployee().find(c => c.id === id);
  //   let dialogRef = this.dialog.open(UpdateDialogComponent ,{ data: EmployeeClass});
  // }

  updateDialog(id: number) {
    // let dialogRef = this.dialog.open(UpdateDialogComponent);
        const Employee = this._employeeService.getAllEmployee().find(c => c.id === id);
  let dialogRef = this.dialog.open(UpdateDialogComponent ,{ data: Employee});
     //dialogRef.afterClosed().subscribe(result => {this.Company_Employees= result})
  }
    openDialog(Employee) { 
          const dialogRef = this.dialog.open(DialogComponent,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Delete',
          cancel: 'No'
        }
      }
    });

       dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
      // const index = this.Company_Employees.indexOf(Employee,0)
      // if (index >-1) {
      //   this.Company_Employees.splice(index,1);
      // }
      this._employeeService.deleteEmployee(Employee)
      }
    });
     }
    }
