import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PortadaComponent } from '../portada/portada.component';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
