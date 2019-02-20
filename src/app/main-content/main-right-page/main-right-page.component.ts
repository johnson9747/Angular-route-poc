import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-right-page',
  templateUrl: './main-right-page.component.html',
  styleUrls: ['./main-right-page.component.css']
})
export class MainRightPageComponent implements OnInit {
@Input() selectedItem:string;
  constructor() { }

  ngOnInit() {
  }

}
