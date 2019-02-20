import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { SectionOneComponent } from './section-one/section-one.component';
import { Module1C1Component } from './module1-c1/module1-c1.component';

@NgModule({
  imports: [
    CommonModule,
    Module1RoutingModule
  ],
  declarations: [SectionOneComponent, Module1C1Component]
})
export class Module1Module { }
