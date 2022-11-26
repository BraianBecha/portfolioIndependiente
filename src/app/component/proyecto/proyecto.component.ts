import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { map, pipe } from 'rxjs';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoServService } from 'src/app/servicios/proyecto-serv.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyectos: Proyecto[] = [];

  constructor(private ProyectoService: ProyectoServService) { }

  ngOnInit(): void {
    this.getProy();
  }
  getProy(): void {
    this.ProyectoService.getProyectos().subscribe(((data:Proyecto[]) => {this.proyectos = data as Proyecto[]}));
    console.log(this.proyectos );
  }

}
