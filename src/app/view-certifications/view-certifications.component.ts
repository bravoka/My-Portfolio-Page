import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-certifications',
  templateUrl: './view-certifications.component.html',
  styles: ['li { max-width: 400px; margin: 14px auto; padding: 1px 0; border-radius: 3px;} li:hover { box-shadow: 1px 1px 4px black}']
})
export class ViewCertificationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
