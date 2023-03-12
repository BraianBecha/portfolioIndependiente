import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../model/persona';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonaServService {

  
  URL='https://springboot-yoprogramo-braianbecha.onrender.com';
  id='1';


  getPersona(): Observable<Persona>{
    return this.http.get<Persona>(`${this.URL}/buscar/persona/${this.id}`);
   
  }
  savePersona(personaNueva:Persona){
    this.http.post(`${this.URL}/editar/persona/`,personaNueva)
    console.log("entró a savePersona")
  }
  deletePersona(x:number){
    this.http.delete(`${this.URL}/delete/${x}`);
  }

  constructor(private http:HttpClient) { }
}
