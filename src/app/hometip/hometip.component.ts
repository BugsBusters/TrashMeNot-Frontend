import {Component, OnInit} from '@angular/core';
import {TipService} from '../services/tip.service';

@Component({
  selector: 'app-hometip',
  templateUrl: './hometip.component.html',
  styleUrls: ['./hometip.component.css']
})
export class HometipComponent implements OnInit {

  public tips: any;

  constructor(private model: TipService) {
  }

  ngOnInit() {
    this.model.getAllTips().subscribe(
      (response) => {
        console.log(response);
        this.tips = response;
      },
      (error) => console.log(error)
    );
  }

}
