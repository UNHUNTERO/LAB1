import { Component, OnInit } from '@angular/core';
import { Show_Console } from './class/show_console';
import { Show_Desktop } from './class/show_desktop';
import { Official } from './class/official';
import { Worker } from './class/worker';

@Component({
  selector: 'app-lab6',
  templateUrl: './lab6.page.html',
  styleUrls: ['./lab6.page.scss'],
})
export class Lab6Page implements OnInit {
  show: string = "";
  constructor() { }

  ngOnInit() {
  }
  ras(){
    let show_con = new Show_Console();
    let show_desk = new Show_Desktop();
    let official = new Official ("Влад",20,"Вчитель",show_con); 
    console.log(official.work());
    let worker = new Worker ("Влад",20,show_desk); 
    this.show = show_desk.info;
    console.log(worker.work());
  }
}
