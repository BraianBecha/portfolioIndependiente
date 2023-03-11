import { Component, importProvidersFrom, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortadaComponent } from './component/portada/portada.component';
import { ProyectoComponent } from './component/proyecto/proyecto.component';
import { IniciarSesionComponent } from './component/iniciar-sesion/iniciar-sesion.component';
import { NotFoundComponentComponent } from './component/not-found-component/not-found-component.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';
import { SkillComponent } from './component/skill/skill.component';
import { AppComponent } from './app.component';
import { FormEditPerfilComponent } from './formPerfil/form-edit-perfil/form-edit-perfil.component';



const appRoutes: Routes = [
  { path: '', component: IniciarSesionComponent,pathMatch:'full'},
  { path: 'portada', component: PortadaComponent },
  { path: 'skill', component: SkillComponent },
  { path: 'proyectos', component: ProyectoComponent },  
  { path: 'educacion', component: EducacionComponent },
  { path: 'experiencia', component: ExperienciaComponent },  
  { path:'iniciar-sesion', component: IniciarSesionComponent},  
  { path:'editar-perfil', component: FormEditPerfilComponent},  
  { path: '**', component:NotFoundComponentComponent} 
];


@NgModule({
  
  
  imports: [
    RouterModule.forRoot(appRoutes)
  ],

  exports: [RouterModule]


})
export class AppRoutingModule { }
