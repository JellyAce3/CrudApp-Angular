import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddContactService } from 'src/app/services/addContact.service';
import { contact } from 'src/app/shared/model/contactmodel';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  contactForm!: FormGroup | any;
  isSubmitted=false;
  constructor(private formbuilder:FormBuilder, private router:Router,private add:AddContactService, private http: HttpClient){}

  ngOnInit(): void {
      this.contactForm=this.formbuilder.group({
        name:['',Validators.required],
        email:['',[Validators.required, Validators.email]],
        phonenumber:['',Validators.required],
      })

  }

  onSubmit(data:contact){

    this.add.addContact(data).subscribe((result)=>{
      this.ngOnInit();
    });

  }

  get fc() {                                                   
    return this.contactForm.controls;
  }

}
 

