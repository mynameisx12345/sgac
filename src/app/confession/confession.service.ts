import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfessionService {
  private confession = new BehaviorSubject<ConfessionI[]>([])
  confession$ = this.confession.asObservable();
  constructor() { }

  addConfession(confession:ConfessionI){
    this.confession.next([...this.confession.value, confession]);
  }

  removeConfession(confession:ConfessionI){
    const newConfession = this.confession.value.filter(conf=>conf.confession !== confession.confession)
    this.confession.next(newConfession);
  }

  updateConfession(confession:ConfessionI){
    let confessionToUpdate = this.confession.value.find(conf=>conf.id ===confession.id);
    confessionToUpdate.status = confession.status;
  }
}

export interface ConfessionI{
  confession:string,
  category: string,
  status: string,
  action: string,
  id: string
}