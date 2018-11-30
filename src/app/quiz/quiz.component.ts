import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  public step: number;
  public punteggio: number;

  constructor() {
    this.step = 1;
    this.punteggio = 0;
  }

  ngOnInit() {
  }

}
