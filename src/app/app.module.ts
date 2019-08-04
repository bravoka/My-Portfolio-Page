import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import { ViewAboutMeComponent } from './view-about-me/view-about-me.component';
import { ViewTechnicalSkillsComponent } from './view-technical-skills/view-technical-skills.component';
import { ViewPersonalPortfolioComponent } from './view-personal-portfolio/view-personal-portfolio.component';
import { ViewPublicationsComponent } from './view-publications/view-publications.component';
import { ViewCertificationsComponent } from './view-certifications/view-certifications.component';
import { ViewOtherLinksComponent } from './view-other-links/view-other-links.component';
import { ViewWorkExperienceComponent } from './view-work-experience/view-work-experience.component';
import { ViewEducationComponent } from './view-education/view-education.component';
@NgModule({
  declarations: [
    AppComponent,
    ViewAboutMeComponent,
    ViewTechnicalSkillsComponent,
    ViewPersonalPortfolioComponent,
    ViewPublicationsComponent,
    ViewCertificationsComponent,
    ViewOtherLinksComponent,
    ViewWorkExperienceComponent,
    ViewEducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
