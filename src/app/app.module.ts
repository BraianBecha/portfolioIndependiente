import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortadaComponent } from './component/portada/portada.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';

import { EducacionComponent } from './component/educacion/educacion.component';

import { ProyectoComponent } from './component/proyecto/proyecto.component';

import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { IniciarSesionComponent } from './component/iniciar-sesion/iniciar-sesion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './component/banner/banner.component';
import { PieComponent } from './component/pie/pie.component';
import{HttpClient, HttpClientModule} from '@angular/common/http';
import { ProyectoServService } from './servicios/proyecto-serv.service';
import { NotFoundComponentComponent } from './component/not-found-component/not-found-component.component';
import { SkillComponent } from './component/skill/skill.component';



@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    ExperienciaComponent,
    IniciarSesionComponent,
    EducacionComponent,
    ProyectoComponent,
    NotFoundComponentComponent,
    ToolbarComponent,
    BannerComponent,
    PieComponent,
    SkillComponent
  ],
  imports: [
    
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],

  

  providers: [ProyectoServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
