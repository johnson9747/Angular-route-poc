import { Component, OnInit, Input } from '@angular/core';
import { DataStoreService } from '../data-store.service';

@Component({
  selector: 'app-main-right-page',
  templateUrl: './main-right-page.component.html',
  styleUrls: ['./main-right-page.component.css']
})
export class MainRightPageComponent implements OnInit {

  constructor(public dataStoreService:DataStoreService) { }

  ngOnInit() {    
  }

}
