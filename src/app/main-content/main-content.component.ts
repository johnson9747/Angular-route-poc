import { Component, OnInit } from '@angular/core';
import { DataStoreService } from './data-store.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
public items:string[];
  constructor(public dataStoreService:DataStoreService) { }

  ngOnInit() {
    this.items=this.dataStoreService.items;
  }
  onSelectItem(item)
  {
    this.dataStoreService.selectedVal=item;
  }
  getSelectedClass(item)
  {
    if(item==this.dataStoreService.selectedVal)
    return 'selected-item';
  }

}
