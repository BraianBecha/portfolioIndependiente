
import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaServService } from 'src/app/servicios/experiencia-serv.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
experiencias : Experiencia[]=[];
  
constructor(private expservice : ExperienciaServService) { }

  ngOnInit(): void {
this.getexp();
  }


  getexp(): void{
    this.expservice.getExperiencias().subscribe((experiencias : Experiencia[])=>(this.experiencias = experiencias as Experiencia[]))
    
  }


}
