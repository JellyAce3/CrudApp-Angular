import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr'
import { NgConfirmModule } from 'ng-confirm-box';
import { ContactListComponent } from './components/pages/contact-list/contact-list.component';
import { AddContactComponent } from './components/pages/add-contact/add-contact.component';
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';
import { ViewComponent } from './components/pages/view/view.component';
import { HeaderComponent } from './components/partial/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteConfimationComponent } from './components/modal/delete-confimation/delete-confimation.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    AddContactComponent,
    PagenotfoundComponent,
    ViewComponent,
    HeaderComponent,
    DeleteConfimationComponent
    
    
    
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
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
