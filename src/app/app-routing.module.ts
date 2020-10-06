import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { MusicListComponent } from './music-list/music-list.component';
import { MusicDetailsComponent } from './music-details/music-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"music-list",component:MusicListComponent},
  {path:"music-details/:id",component:MusicDetailsComponent},
  {path:"add",component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
