import { WorkBlock } from './workblock';
import { Course } from './course';
import { getLocaleFirstDayOfWeek } from '@angular/common';

export class Semester {
  name: string;
  courses: Course[];
  startDate: Date;
  endDate: Date;
  workBlocks: WorkBlock[];

}