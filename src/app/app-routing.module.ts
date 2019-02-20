import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionTwoComponent } from './section-two/section-two.component';
import { SectionThreeComponent } from './section-three/section-three.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SectionOneComponent } from './module1/section-one/section-one.component';
import { AuthGuardService } from './auth/auth-guard.service';
const routes: Routes = [
  { path: 'home', component: MainContentComponent },
  { path: 'module1', loadChildren:'./module1/module1.module#Module1Module' },
  { path: 'module2', component: SectionTwoComponent,canActivate:[AuthGuardService] },
  { path: 'module3', component: SectionThreeComponent },
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path: '**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
  
 }
