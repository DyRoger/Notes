import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Import for routes
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JavaComponent } from './mymodules/java/java.component';

//Add routing module 
// const routes: Routes = [
//   // { path: '', component: AppComponent },
//   { path: 'java', component: JavaComponent }

//   // otherwise redirect to home
//   // { path: '**', redirectTo: '' }
// ];

@NgModule({
  declarations: [
    AppComponent,
    JavaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'java', component: JavaComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
