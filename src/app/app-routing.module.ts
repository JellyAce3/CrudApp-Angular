import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './components/pages/contact-list/contact-list.component';
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';
import { ViewComponent } from './components/pages/view/view.component';

const routes: Routes = [
  {path: '',redirectTo: 'contactlist',pathMatch:'full'},
  {path: 'contactlist', component:ContactListComponent},
  {path: 'viewcontact/:id', component: ViewComponent},
  {path: '**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
