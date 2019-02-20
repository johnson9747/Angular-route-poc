import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SectionTwoComponent } from './section-two/section-two.component';
import { SectionThreeComponent } from './section-three/section-three.component';
import { AppRoutingModule } from './/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainRightPageComponent } from './main-content/main-right-page/main-right-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainContentComponent,    
    SectionTwoComponent,
    SectionThreeComponent,
    PageNotFoundComponent,
    MainRightPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
