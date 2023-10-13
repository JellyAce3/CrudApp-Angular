import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactListComponent } from './components/pages/mainpageComp/contact-list/contact-list.component';
import { AddContactComponent } from './components/pages/mainpageComp/add-contact/add-contact.component';
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';
import { ViewComponent } from './components/pages/view/view.component';
import { HeaderComponent } from './components/partial/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    AddContactComponent,
    PagenotfoundComponent,
    ViewComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
