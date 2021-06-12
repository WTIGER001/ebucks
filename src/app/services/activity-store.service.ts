import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivityStoreService {
  spendActivities : Activity[] = [
    {name: "Watch TV", id:"watch-tv", type:"timed"},
    {name: "Playstion", id:"playstation", type:"timed"},
    {name: "Watch Show", id:"watch-show", type:"fixed"},
    {name: "Computer", id:"computer", type:"timed"},
  ]
  constructor() { }

  getAll() : Activity[] {
    return this.spendActivities
  }

  find(id : string) : Activity | undefined {
    return this.spendActivities.find( a => a.id == id)
  }

}

export interface Activity {
  name: string
  id: string
  description ?: string
  type: string
}