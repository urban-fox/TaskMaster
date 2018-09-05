export abstract class Block {
  // abstract class for workBlocks and taskBlocks
  private _start: Date;
  private _end: Date;
  private _duration: number;
  static MILLISECONDS_IN_HOUR: number = 3600000;

  constructor(start: Date, end: Date){
    this._start = start;
    this._end = end;
    this.calculateDuration();
  }

  get start(): Date {
    return this._start;
  }

  get end(): Date {
    return this._end;
  }

  get duration(): number {
    return this._duration;
  }

  set end(endDate: Date) {
    this._end = endDate;
    this.calculateDuration();
  }

  set duration(dur: number) {
    this._duration = dur;
    this.calculateEnd();
  }

  protected calculateDuration(){
    this._duration = (this._end.getTime() - this._start.getTime()) / Block.MILLISECONDS_IN_HOUR;
  }

  protected calculateEnd(){
    let ms = this._duration * Block.MILLISECONDS_IN_HOUR;
    this._end = new Date(this._start.getTime() + ms);
  }
  
}