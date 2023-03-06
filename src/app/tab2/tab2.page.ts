import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  a: number = 0;
  b: number = 0;
  mas: number[] = [];
  d: number = 0;
  gen_mas(a:any,b:any){
    this.a=parseInt(a);
    this.b=parseInt(b);
    let step = 1;
    return Array( b - a + 1).fill(a).map((x,y)=>x+y*step);
  }
  ras(a:any,b:any){
    try{
      this.a=parseInt(a);
      this.b=parseInt(b);
      this.mas = this.gen_mas(this.a,this.b);
      this.d=0;
      for(let i =0; i <= this.mas.length; i++ ){
        if(this.mas[i]%55== 0 && this.mas[i] % 2 == 1 && this.mas[i] % 7 == 3){
        this.d++;
        console.log(this.mas[i]);
        }
      }
    }
    catch(error){
      console.log(error);
    }
  }
}
