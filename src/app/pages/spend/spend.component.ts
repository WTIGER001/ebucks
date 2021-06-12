import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spend',
  templateUrl: './spend.component.html',
  styleUrls: ['./spend.component.css']
})
export class SpendComponent implements OnInit {
  spendOptions = [
    {name: "Watch TV", value:"watch-tv"},
    {name: "Watch TV", value:"watch-tv"},
    {name: "Watch TV", value:"watch-tv"},
    {name: "Watch TV", value:"watch-tv"},
    {name: "Watch TV", value:"watch-tv"},
    {name: "Watch TV", value:"watch-tv"},
    {name: "Watch TV", value:"watch-tv"},
    // {name: "Watch TV", value:"watch-tv"},
    // {name: "Watch TV", value:"watch-tv"},
    // {name: "Watch TV", value:"watch-tv"},
    // {name: "Watch TV", value:"watch-tv"},
    // {name: "Watch TV", value:"watch-tv"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
