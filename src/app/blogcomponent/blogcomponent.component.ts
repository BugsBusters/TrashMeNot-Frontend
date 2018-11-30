import {Component, Inject, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
@Component({
  selector: 'app-blogcomponent',
  templateUrl: './blogcomponent.component.html',
  styleUrls: ['./blogcomponent.component.css']
})
export class BlogcomponentComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document) { }

  ngOnInit() {
    this.document.getElementById('style').setAttribute('href', 'assets/css/style_2.css');
    this.document.getElementById('responsive').setAttribute('href', 'assets/css/responsive_2.css');
  }

}
