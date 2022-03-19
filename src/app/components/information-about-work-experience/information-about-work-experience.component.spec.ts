import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationAboutWorkExperienceComponent } from './information-about-work-experience.component';

describe('InformationAboutWorkExperienceComponent', () => {
  let component: InformationAboutWorkExperienceComponent;
  let fixture: ComponentFixture<InformationAboutWorkExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationAboutWorkExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationAboutWorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
