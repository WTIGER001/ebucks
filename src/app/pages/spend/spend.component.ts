import { Component, OnInit } from '@angular/core';
import { Activity, ActivityStoreService } from 'src/app/services/activity-store.service';

@Component({
  selector: 'app-spend',
  templateUrl: './spend.component.html',
  styleUrls: ['./spend.component.css']
})
export class SpendComponent implements OnInit {
  spendOptions : Activity[]  = []
  
  constructor(private activtySvc : ActivityStoreService) { }

  ngOnInit(): void {
    this.spendOptions = this.activtySvc.getAll()
  }

}
