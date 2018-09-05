import { Course } from './../models/course';
import { WorkBlock } from './../models/workblock';
import { Semester } from './../models/semester';
import { MOCK_COURSE1, MOCK_COURSE2 } from './mock-courses';

export const MOCK_SEMESTER: Semester = {
  name: "2018 Semester 2",
  startDate: new Date('2018-07-16'),
  endDate: new Date('2018-11-09'),
  courses: [MOCK_COURSE1, MOCK_COURSE2],
  workBlocks: null
}