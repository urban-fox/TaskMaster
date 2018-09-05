import { Assessment } from './../models/assessment';
import { TOPIC_A, TOPIC_B } from './mock-topics';


export const MOCK_ASSESSMENT: Assessment = {
  title: "Mid-Semester Test",
  date: new Date("2018-07-16"),
  topics: [TOPIC_A, TOPIC_B]
}