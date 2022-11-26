import { Component, importProvidersFrom, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortadaComponent } from './component/portada/portada.component';
import { ProyectoComponent } from './component/proyecto/proyecto.component';
import { IniciarSesionComponent } from './component/iniciar-sesion/iniciar-sesion.component';
import { NotFoundComponentComponent } from './component/not-found-component/not-found-component.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';
import { SkillComponent } from './component/skill/skill.component';



const appRoutes: Routes = [
  { path: 'portada', component: PortadaComponent },
  { path: 'skills', component: SkillComponent },
  { path: 'proyectos', component: ProyectoComponent },  
  { path: 'educacion', component: EducacionComponent },
  { path: 'experiencia', component: ExperienciaComponent },  
  {path:'iniciar-sesion', component: IniciarSesionComponent},
  {path: '', component: IniciarSesionComponent,pathMatch:'full'},
  { path: '**', component:NotFoundComponentComponent} 
];


@NgModule({
  
  
  imports: [
    RouterModule.forRoot(appRoutes)
  ],

  exports: [RouterModule]


})
export class AppRoutingModule { }
