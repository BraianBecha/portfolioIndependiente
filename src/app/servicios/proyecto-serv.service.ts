import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Proyecto } from '../model/proyecto';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ProyectoServService {


URL='https://springboot-yoprogramo-braianbecha.onrender.com/';


  getProyectos(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(`${this.URL}ver/proyectos`)
   
  }

  constructor(private http:HttpClient) { }
}
