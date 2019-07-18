import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryComponent} from './category/category.component';
import { DetailsComponent } from './details/details.component';
import { ItemsComponent } from './items/items.component';


const routes: Routes = [
  {path:'', component:CategoryComponent},
  {path:'details', component:DetailsComponent},
  {path:'items', component:ItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
