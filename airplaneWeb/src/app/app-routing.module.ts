import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirplaneComponent } from './pages/airplane/airplane.component';


const routes: Routes = [
  {
    path: '',
        component: AirplaneComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
