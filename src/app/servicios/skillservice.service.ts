import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';


@Injectable({
  providedIn: 'root'
})
export class SkillserviceService {
URL ='http://localhost:8080/';

getskills():Observable<Skill[]>{
  //return this.http.get<Skill[]>(`${this.URL}"/ver/skills"`)
  return this.http.get<Skill[]>(`${this.URL}ver/skills`)
 // http://localhost:8080/ver/skills
}

  constructor(private http : HttpClient) { }
}
