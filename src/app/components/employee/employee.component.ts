import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/model/employee';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  @Input() employee!: Employee
}
