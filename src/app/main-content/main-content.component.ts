import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
public items:string[];
  constructor() { }

  ngOnInit() {
    this.items=["Item 1","Item 2","Item 3","Item 4"]
  }

}
