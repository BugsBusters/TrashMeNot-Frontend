import {Component, Inject, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document) { }

  ngOnInit() {
    this.document.getElementById('style').setAttribute('href', 'assets/css/style.css');
    this.document.getElementById('responsive').setAttribute('href', 'assets/css/responsive.css');
  }

}
