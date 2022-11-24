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


URL='http://localhost:8080/ver/proyectos';


  getProyectos(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(`http://localhost:8080/ver/proyectos`)
   
  }

  constructor(private http:HttpClient) { }
}
