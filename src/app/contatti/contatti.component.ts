import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document) { }

  ngOnInit() {
    this.document.getElementById('style').setAttribute('href', 'assets/css/style_2.css');
    this.document.getElementById('responsive').setAttribute('href', 'assets/css/responsive_2.css');
  }

}
