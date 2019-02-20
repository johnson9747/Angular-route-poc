import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionOneComponent } from './section-one/section-one.component';
import { Module1C1Component } from './module1-c1/module1-c1.component';

const routes: Routes = [{ path: '', component: SectionOneComponent,children: [
  {path: 'comp1',component: Module1C1Component},
  {path: '',component: Module1C1Component}]
 }];

@NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
