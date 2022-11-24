import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Experiencia } from '../model/experiencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaServService {
  URL='http://localhost:8080/ver/proyectos';


  getExperiencias(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`http://localhost:8080/ver/experiencia`)
   
  }

  constructor(private http:HttpClient) { }
}

