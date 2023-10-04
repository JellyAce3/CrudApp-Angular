import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { UpdateContactComponent } from './components/update-contact/update-contact.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ViewComponent } from './components/view/view.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    AddContactComponent,
    UpdateContactComponent,
    PagenotfoundComponent,
    ViewComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
