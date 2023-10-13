import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';
import { ViewComponent } from './components/pages/view/view.component';
import { ContactListComponent } from './components/pages/mainpageComp/contact-list/contact-list.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ContactListComponent},
  { path: 'viewcontact/:id', component: ViewComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
