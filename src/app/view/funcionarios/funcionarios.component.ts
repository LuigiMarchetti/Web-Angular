import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {
  employees: Employee[] = [];

  ngOnInit(): void {
    fetch("assets/arquivo.json")
      .then((response) => response.json())
      .then((res) => this.employees = res);
  }

}
