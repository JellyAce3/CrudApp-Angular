import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr'
import { NgConfirmModule } from 'ng-confirm-box';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ViewComponent } from './components/view/view.component';
import { HeaderComponent } from './components/header/header.component';


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
    ToastrModule.forRoot({
      positionClass:'toast-top-center',
      preventDuplicates:true,
      timeOut:3000,
      easing:'ease-in',
      easeTime:1000

    }),
    NgConfirmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
