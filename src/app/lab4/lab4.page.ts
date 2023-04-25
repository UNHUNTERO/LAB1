import { Component, OnInit } from '@angular/core';

import { Polynomial } from './Class/polynomial';
import { Square_p } from './Class/square_polynom';
import { Qube_p } from './Class/qube_polynom';
@Component({
  selector: 'app-lab4',
  templateUrl: './lab4.page.html',
  styleUrls: ['./lab4.page.scss'],
})
export class LAB4Page implements OnInit {
  polynom: Polynomial[] = [];
  max: number =0; 
  max_p:number =0;
  constructor() { }
  getRandomint(max: number){
    return Math.floor(Math.random()*Math.floor(max)+1);
  }
  ras(nn:any){

    this.polynom = new Array();
    let n = parseInt(nn);
    for (let i = 0; i < n; i++){
      this.polynom.push(new Square_p("Квадратний багаточлен", 1,2,3,this.getRandomint(10)))
      this.polynom.push(new Qube_p("Кубічний багаточлен",1,2,3,4, this.getRandomint(10)))
    }
    this.max_p=0;
    this.polynom.forEach((element) => {
      element.S();
      if (this.max_p<element.result) this.max_p = element.result;
      console.log(element.show())
      console.log(this.max_p)
    });
  }
  getColor_p(el:number, max:number){
    return el == max ? "green" : "";
  }
  ngOnInit() {
  }

}
