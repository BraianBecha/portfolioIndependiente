import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/model/persona';
import { PersonaServService } from 'src/app/servicios/persona-serv.service';
import { FormBuilder } from "@angular/forms";
import { FormsModule }   from '@angular/forms'; 
import { ReactiveFormsModule } from "@angular/forms";


@Component({
  selector: 'app-form-edit-perfil',
  templateUrl: './form-edit-perfil.component.html',
  styleUrls: ['./form-edit-perfil.component.css']
})

export class FormEditPerfilComponent implements OnInit {
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
  
  personaNueva: any;

  constructor(private persoService : PersonaServService,
    private formBuilder: FormBuilder,) {

      this.personaNueva = this.formBuilder.group({
       
      });
     }

  ngOnInit(): void {

   
      this.getPers();
      
    }
    getPers(){
      this.persoService.getPersona().subscribe((data => {this.persona = data}));
     }
     savePerfil(){
      this.persoService.savePersona(this.personaNueva) ;
      console.log(this.personaNueva);
      console.log("entró a savePerfil")
     }
     borrarPerfil(){
      this.persoService.deletePersona(this.personaNueva.id);
     }
     onSubmit(formValue:Persona){
      console.log(formValue)
    }
}
