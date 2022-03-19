import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-about-work-experience',
  templateUrl: './information-about-work-experience.component.html',
  styleUrls: ['./information-about-work-experience.component.scss']
})
export class InformationAboutWorkExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  generalInformationAboutUserWork: any = [{
    key: "Место работы:",
    meaning: "Казино Carat"
  }, {
    key: "Адрес компании:",
    meaning: "город Минск, улица Якуба Колоса 1"
  }, {
    key: "Опыт работы:",
    meaning: "крупье, 7 лет"
  }]

  jobResponsibilitiesofUser: any = {
    key: "Должностные обязанности:",
    responsibilities: ["владение правилами игр", "быстрое и правильное ведение игры", "общение с гостями"]
  }
}
