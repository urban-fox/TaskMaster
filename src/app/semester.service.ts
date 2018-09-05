import { Semester } from './models/semester';
import { Injectable } from '@angular/core';
import { MOCK_SEMESTER } from './mocks/mock-semester';
import { WorkBlock } from './models/workblock';

@Injectable({
  providedIn: 'root'
})
export class SemesterService {

  constructor() { }

  /**
   * getSemester
   * For now, returns a dummy semester
   */
  public getSemester() {
    let semester: Semester = MOCK_SEMESTER;
    this.generateWorkblocks(semester);
    return semester;
  }
  
  private generateWorkblocks(semester: Semester){
    let workBlocks: WorkBlock[] = [];
    let startDate: Date;
    let endDate: Date;
    // generate 5 days of 9-12
    for (let i = 0; i < 5; i++) {
      startDate = new Date(2018, 7, 16 + i, 9);
      endDate = new Date(2018, 7, 16 + i, 12) 
      workBlocks.push(new WorkBlock(startDate, endDate));
    }
    // generate a day of 2-3
    startDate = new Date(2018, 7, 16 + 5, 14);
    endDate = new Date(2018, 7, 16 + 5, 15);
    workBlocks.push(new WorkBlock(startDate, endDate));

    // generate a day of 9-12, 1-3
    startDate = new Date(2018, 7, 16 + 6, 9);
    endDate = new Date(2018, 7, 16 + 6, 12);
    workBlocks.push(new WorkBlock(startDate, endDate));

    startDate = new Date(2018, 7, 16 + 6, 13);
    endDate = new Date(2018, 7, 16 + 6, 15);
    workBlocks.push(new WorkBlock(startDate, endDate));

    semester.workBlocks = workBlocks;
  }
}
