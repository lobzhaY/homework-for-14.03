import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-about-skills',
  templateUrl: './information-about-skills.component.html',
  styleUrls: ['./information-about-skills.component.scss']
})
export class InformationAboutSkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  allUserSkills: any = ["Умение слушать;", "Терпение", "Желание учиться", "Начальный уровень испанского", "Разговорный английский",
  "Javascript", "CSS", "HTML", "React", "Angular"];
}
