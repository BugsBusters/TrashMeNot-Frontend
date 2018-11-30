import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {TipService} from '../services/tip.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public tips: any;

  constructor(@Inject(DOCUMENT) private document, private model: TipService) {
  }

  ngOnInit() {
    this.document.getElementById('style').setAttribute('href', 'assets/css/style_2.css');
    this.document.getElementById('responsive').setAttribute('href', 'assets/css/responsive_2.css');
    this.model.getAllTips().subscribe(
      (response) => {
        console.log(response);
        this.tips = response;
      },
      (error) => console.log(error)
    );
    //console.log(this.tips);
  }

}
