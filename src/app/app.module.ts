import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformationAboutWorkExperienceComponent } from './components/information-about-work-experience/information-about-work-experience.component';
import { InformationAboutSkillsComponent } from './components/information-about-skills/information-about-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    InformationAboutWorkExperienceComponent,
    InformationAboutSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
