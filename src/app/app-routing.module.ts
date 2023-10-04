import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { UpdateContactComponent } from './components/update-contact/update-contact.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: 'contactlist', component:ContactListComponent},
  {path: 'addcontact', component: AddContactComponent},
  {path: 'updatecontact/:id', component: UpdateContactComponent},
  {path: '',redirectTo: 'contactlist',pathMatch:'full'},
  {path: '**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
