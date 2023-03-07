import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Educacion } from '../model/educacion';


@Injectable({
  providedIn: 'root'
})
export class EducacionServService {
URL='http://localhost:8080/';
   

  
  getEducacion(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.URL}ver/educacion`)
   
  }
  



  constructor(private http:HttpClient) { }
}