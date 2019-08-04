import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTechnicalSkillsComponent } from './view-technical-skills.component';

describe('ViewTechnicalSkillsComponent', () => {
  let component: ViewTechnicalSkillsComponent;
  let fixture: ComponentFixture<ViewTechnicalSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTechnicalSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTechnicalSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
