import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado/empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {

  constructor(
    private router:Router,
    private servicioEmpleado:ServicioEmpleadosService,
    private servicioDataEmpleado: EmpleadosService) { 
      this.empleados = this.servicioDataEmpleado.empleados;
    }

  ngOnInit(): void {
  }

  empleados:Empleado[] = [];

  volverHome(){
      this.router.navigate(['']);
  }

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido,this.cuadroCargo,this.cuadroSalario)

    //this.servicioEmpleado.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);

    this.servicioDataEmpleado.agregarEmpleadoServicio(miEmpleado);

    this.router.navigate(['']);

  }
  cuadroNombre: string = "";
  cuadroApellido: string = ""
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

}
