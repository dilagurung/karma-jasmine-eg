/**
 * Created by oa on 2/14/2017.
 */

import {Injectable} from '@angular/core'

@Injectable()
export  class MyService {
  animals:Array<string>;

  constructor()
  {
    this.animals=['golden retriever', 'french bulldog', 'german shepherd', 'alaskan husky', 'jack russel terrier', 'boxer', 'chow chow', 'pug', 'akita', 'corgi', 'labrador'];
  }


  getDogs(count:number) {
    var result = [];


    if (count > this.animals.length) count = this.animals.length;

    for (var i=0; i<count; i++) {
      result.push(this.animals[i]);
    }

    return result;
  }
}
