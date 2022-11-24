import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaServService } from 'src/app/servicios/persona-serv.service';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {
  
  persona : Persona ={
    id: 0,
    nombre:"" ,
    apellido:"" ,
    nacionalidad: "undefined",
    mail: "",
    sobre_mi: "",
    ocupacion: "",
    image_background_header: "",
    imagen_perfil: ""
  };

  constructor(private persoService : PersonaServService) { }

  ngOnInit(): void {
    this.getPers();
    
  }

  getPers(){
    this.persoService.getPersona().subscribe((data => {this.persona = data}));
   }


   cambiar_parrafo(){
    
   }


}
