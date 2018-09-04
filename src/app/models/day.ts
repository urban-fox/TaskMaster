import { TaskBlock } from './taskblock';
import { WorkBlock } from "./workblock";

export class Day {
  date: Date;
  workBlocks: WorkBlock[];

  public hasFreeTime(): boolean{
    // TODO: actually check
    return true;
  }

  public scheduleSession (task: TaskBlock): number {
    // schedules the given task, returns the hour if successful
    // else returns 0 on failure ie no free time
    this.workBlocks
  }
  /* implement this later when implementing workblocks
  public hasFreeWorkBlock: boolean (duration: number){
    this.workBlocks.forEach(element => {
      
    });
  }
  */
}