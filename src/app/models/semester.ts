import { Day } from './day';
import { getLocaleFirstDayOfWeek } from '@angular/common';

export class Semester {
  name: string;
  days: Day[];

  constructor(days: number){
    let day: Day;
    this.days = new Array<Day>();

    // create an array of empty Day objects
    for (let index = 0; index < days; index++) {
      day = new Day();  
      this.days.push(day);
    }
  }
}