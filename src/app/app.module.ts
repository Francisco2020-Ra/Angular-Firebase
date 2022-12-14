import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { EmpleadosService } from './empleados.service';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicaEmpleadoCComponent } from './caracteristica-empleado-c/caracteristica-empleado-c.component';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { DataService } from './data.service';


const appRoutes: Routes = [

  { path: '', component: HomeComponentComponent },
  { path: 'proyectos', component: ProyectosComponentComponent },
  { path: 'quienes', component: QuienesComponentComponent },
  { path: 'contacto', component: ContactoComponentComponent },
  { path: 'actualiza/:id', component: ActualizaComponentComponent },
  { path: '**', component: ErrorPersonalizadoComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    EmpleadoHijoCComponent,
    CaracteristicaEmpleadoCComponent,
    ActualizaComponentComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ErrorPersonalizadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ServicioEmpleadosService, EmpleadosService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
