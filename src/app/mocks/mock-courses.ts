import { TOPIC_A, TOPIC_B, TOPIC_C, TOPIC_D } from './mock-topics';
import { Course } from './../models/course';

export const MOCK_COURSE1: Course = {
  title: "The first mock course",
  courseCode: "MOCK101",
  topics: [TOPIC_A, TOPIC_B],
  deliverables: null
}

export const MOCK_COURSE2: Course = {
  title: "The second mock course",
  courseCode: "MOCK102",
  topics: [TOPIC_C, TOPIC_D],
  deliverables: null
}
