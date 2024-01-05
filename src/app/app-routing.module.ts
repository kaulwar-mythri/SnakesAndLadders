import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { BootComponent } from './boot/boot.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/boot', pathMatch: 'full' },
  { path: 'boot', component: BootComponent },
  { path: 'app', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
