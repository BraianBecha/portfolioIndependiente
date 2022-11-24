import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject,  map,  Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url = "http://localhost:8080"
  currentUserSubject : BehaviorSubject<any>;

  constructor(private http: HttpClient) { 
console.log("el servicio de autenticación está corriendo")
this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'))

  }

IniciarSesion(credenciales:any):Observable<any> 
{
  return this.http.post(this.url, credenciales).pipe(map(data => {

    return data;
  }))
}


}
