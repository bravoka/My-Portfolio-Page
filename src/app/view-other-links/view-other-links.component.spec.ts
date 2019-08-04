import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOtherLinksComponent } from './view-other-links.component';

describe('ViewOtherLinksComponent', () => {
  let component: ViewOtherLinksComponent;
  let fixture: ComponentFixture<ViewOtherLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOtherLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOtherLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
