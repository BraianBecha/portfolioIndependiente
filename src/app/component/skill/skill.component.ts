import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillserviceService } from 'src/app/servicios/skillservice.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
serieskill : Skill []=[];



  constructor(private skillservice : SkillserviceService) { }

  ngOnInit(): void {

    this.getSkill();
  }
  getSkill():void{
    this.skillservice.getskills().subscribe((data :Skill[]) => {this.serieskill = data as Skill[]});
    console.log(this.serieskill);
  }

}

