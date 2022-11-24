import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';



@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  name = new FormControl('');
  formBuilder = new FormBuilder
  eMailUsuarioControl = new FormControl('');
  form : FormGroup;

  constructor(private formbuilder : FormBuilder) {

    this.form=this.formBuilder.group(
      {
        email:['',[Validators.required, Validators.email]],
        password:['',[Validators.required,Validators.minLength(8)]],
         deviceInfo:this.formBuilder.group({ 
         deviceId: ["17867868768"],
         devideType: ["DEVICE_TYPE_ANDROID"],
         notificationToken:["67657575eececc34"] 
        })   
      })
   }

  ngOnInit(): void {
  }

  get Email(){
    return this.form.get('email');
  }

  get Password(){
    return this.form.get('password');
  }


}
