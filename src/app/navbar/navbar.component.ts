import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {TipService} from '../services/tip.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document, private model: TipService) {
  }

  ngOnInit() {
    this.document.getElementById('style').setAttribute('href', 'assets/css/style_2.css');
    this.document.getElementById('responsive').setAttribute('href', 'assets/css/responsive_2.css');

  }
}
