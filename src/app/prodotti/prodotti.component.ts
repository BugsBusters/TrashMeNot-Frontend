import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {TipService} from '../services/tip.service';
import {ProdottiService} from '../services/prodotti.service';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {

  public prodotti: any;


  constructor(@Inject(DOCUMENT) private document,  private model: ProdottiService) { }

  ngOnInit() {
    this.document.getElementById('style').setAttribute('href', 'assets/css/style_2.css');
    this.document.getElementById('responsive').setAttribute('href', 'assets/css/responsive_2.css');
    this.model.getProducts().subscribe(
      (response) => {
        console.log(response);
        this.prodotti = response;
      },
      (error) => console.log(error)
    );
  }
}
