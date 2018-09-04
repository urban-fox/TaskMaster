import { Deliverable } from './deliverable';
import { Topic } from "./topic";

export class Course {
  title: string;
  courseCode: string;
  topics: Topic[];
  deliverables: Deliverable[];
}