import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionServService } from 'src/app/servicios/educacion-serv.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  historiaeduc: Educacion[]=[]

  constructor(private Educacionservice :EducacionServService) { }

geteduc(){this.Educacionservice.getProyectos().subscribe((historiaeduc:Educacion[])=>{this.historiaeduc=historiaeduc as Educacion[]})}






  ngOnInit(): void {
  
  
  
  }

}
