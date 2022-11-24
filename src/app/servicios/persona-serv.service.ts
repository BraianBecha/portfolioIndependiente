import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../model/persona';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonaServService {

  
  URL='http://localhost:8080';
  id='1';


  getPersona(): Observable<Persona>{
    return this.http.get<Persona>(`${this.URL}/buscar/persona/${this.id}`);
   
  }

  constructor(private http:HttpClient) { }
}
