import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchQuestionComponent } from './search-question/search-question.component'
const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'prefix'},
  { path: 'search', component: SearchQuestionComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
