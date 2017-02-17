/**
 * Created by oa on 2/14/2017.
 */

import {Component, OnInit} from '@angular/core';
import {MyService} from "../services/my-service";
import {MyPipe} from "../pipes/my-pipe";

@Component({

  selector:'my-list',
  providers:[MyService,MyPipe],
  template: `<ul><li *ngFor="#item of items">{{ item | capitalizeWords }}</li></ul>`,
  styles: [`
        :host {
            font-family: 'Arial';
            display: flex;
            width: 100%;
            height: 100%;
        }
    `]

})



export class MyList implements OnInit {
  items:Array<string>;
  service:MyService;

  constructor(service:MyService) {
    this.service = service;
  }

  ngOnInit()
  {
    this.items = this.service.getDogs(5);
  }
}
