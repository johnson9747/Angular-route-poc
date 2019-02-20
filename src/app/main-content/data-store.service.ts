import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
public selectedVal:string;
public items:string[];
  constructor() {
    this.items=["Item 1","Item 2","Item 3","Item 4"];
    this.selectedVal=this.items[0];
   }
}
