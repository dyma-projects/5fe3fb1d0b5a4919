import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  public name: string = 'SquaredGrunt';
  public bgColor: string = 'green';

  public changeColor(): void {
    (this.bgColor === 'green') ? this.bgColor = 'blue' : this.bgColor = 'green';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
