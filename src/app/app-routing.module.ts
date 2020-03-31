import { ReverseAuthGuard } from './authentication/services/guards/reverse-auth.guard';
import { BlankComponent } from './layout/blank/blank.component';
import { FullComponent } from './layout/full/full.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './authentication/services/guards/auth.guard';


const routes: Routes = [
  {
    path : "" , redirectTo : "tasks" , pathMatch : "full"
  },
  {
    path: '', component: FullComponent, children: [
      { path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) }
    ] , canActivate :[AuthGuard]
  },
  {
    path: '', component: BlankComponent, children: [
      { path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) }
    ] , canActivate : [ReverseAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
