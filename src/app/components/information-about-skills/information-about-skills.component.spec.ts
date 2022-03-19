import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationAboutSkillsComponent } from './information-about-skills.component';

describe('InformationAboutSkillsComponent', () => {
  let component: InformationAboutSkillsComponent;
  let fixture: ComponentFixture<InformationAboutSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationAboutSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationAboutSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
