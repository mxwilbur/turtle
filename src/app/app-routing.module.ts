import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home';
import { VirtualinfoComponent } from './virtualinfo';
import { LoginComponent } from './login';
import { AcctFormComponent } from './acct-form';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'acct-form', component: AcctFormComponent },
  { path: 'virtualinfo', component: VirtualinfoComponent },
  { path: 'login', component: LoginComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
