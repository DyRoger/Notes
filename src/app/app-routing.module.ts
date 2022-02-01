import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavaComponent } from './mymodules/java/java.component';

const routes: Routes = [
  { path: 'java', component: JavaComponent },
  {path: '', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
