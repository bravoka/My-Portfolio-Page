import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPersonalPortfolioComponent } from './view-personal-portfolio.component';

describe('ViewPersonalPortfolioComponent', () => {
  let component: ViewPersonalPortfolioComponent;
  let fixture: ComponentFixture<ViewPersonalPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPersonalPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPersonalPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
