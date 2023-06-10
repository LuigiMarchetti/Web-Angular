import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './view/app-header/app-header.component';
import { FooterComponent } from './view/footer/footer.component';
import { NavbarComponent } from './view/navbar/navbar.component';
import { MainComponent } from './view/main/main.component';
import { HomePageComponent } from './view/home-page/home-page.component';
import { FuncionariosComponent } from './view/funcionarios/funcionarios.component';
import { EmployeeModule } from './components/employee/employee.module';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    FooterComponent,
    NavbarComponent,
    MainComponent,
    HomePageComponent,
    FuncionariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
