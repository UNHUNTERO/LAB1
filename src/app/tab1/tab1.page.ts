import { Component } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  a: number = 0;
  b: number = 0;
  c: number = 0;
  d: number = 0;

  ras(a:any, b:any, c: any){
    
    try{
      this.a=parseInt(a);
      this.b=parseInt(b);
      this.c=parseInt(c);
      this.d=0;
      if ((isNaN(this.a)==true)||(isNaN(this.a)==true)||(isNaN(this.a)==true)){
      throw new Error('Parameter is not a number!');
      }
      if(a%44==0) {this.d++};
      if(b%44==0) {this.d++};
      if(c%44==0) {this.d++};
      console.log(this.a,this.b,this.c,this.d) 
    }
    catch(error){
      console.log(error);
    }
    
  }

}
