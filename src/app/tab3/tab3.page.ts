import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  a: number[][] = [];
  n: number = 0;
  dd: number[] = [];
  constructor() { }
  getRandomInt(max: any) {
    return Math.floor(Math.random() * max + 1);
  }
  arrayras(n: any) {
    this.a = [];

    try {
      this.n = parseInt(n);
      if (isNaN(this.n) == true) {
        throw new Error('Parametr is not number!');
      }
      if (n <= 0) {
        throw new Error('Parameter less than zero');
      }
      let i: number = 0, j: number = 0;
      this.a = Array(this.n);
      console.log("Array created");
      for (i = 0; i < this.n; i++) {
        this.a[i] = Array(this.n);
        for (j = 0; j < this.n; j++) {
          let aa: number = this.getRandomInt(10);
          this.a[i][j] = aa;
        }
      }
       let ii: number = 0, jj: number = 0, k: number = 0;
       let d: number = 1;

        this.dd = new Array();
        console.log(this.dd)
      for (jj = 1; jj <= this.n; jj++) {
        if (jj % 2 == 1) {
          for (ii = 0; ii < this.n; ii++) {
            d = this.a[ii][jj-1] * d;
          }
          this.dd[k] = d;
          k++;
          d=1;
        }
      }
   
    }
    catch (error) {
      console.log(error)
    }

  }
  getColor(b: number) {
    return b%2 == 1? 'red' : 'green';
  }
  ngonInit() {

  }
}
