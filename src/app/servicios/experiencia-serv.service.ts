import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Experiencia } from '../model/experiencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaServService {
  URL='https://springboot-yoprogramo-braianbecha.onrender.com/';


  getExperiencias(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.URL}ver/experiencia`)
   
  }

  
  addExperiencia(edu : Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(`${this.URL}new/experiencia`, edu)
      
  }
  deleteExperiencia(id: number): Observable<Experiencia> {
    const url = `${this.URL}/delete/experiencia/${id}`; 
    return this.http.delete<Experiencia>(`${url}`);
      
  }
  constructor(private http:HttpClient) { }
}

