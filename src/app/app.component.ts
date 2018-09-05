import { Semester } from './models/semester';
import { SemesterService } from './semester.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string = 'TaskMaster';
  semester: Semester;

  constructor(private semesterService: SemesterService){}

  ngOnInit() {
    this.semester = this.semesterService.getSemester();
    console.log(this.semester);
  }    
  
}
