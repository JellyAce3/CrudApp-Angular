import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms' 
import { Router } from '@angular/router';
import { AddContactService } from 'src/app/services/addContact.service';
import { contact } from 'src/app/shared/model/contactmodel';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit{

  contactForm!: FormGroup | any;
  isSubmitted=false;
  constructor(private formbuilder:FormBuilder, private router:Router,private add:AddContactService){}

  ngOnInit(): void {
      this.contactForm=this.formbuilder.group({
        name:['',Validators.required],
        email:['',[Validators.required, Validators.email,Validators.pattern]],
        phonenumber:['',Validators.required,],
      })
  }

  submitContact(data:contact){
    this.isSubmitted = true;
    if (this.contactForm.invalid) return;

    //console.log(this.contactForm.value)
    this.add.addContact(data).subscribe((res =>{
    this.contactForm.reset();
    this.router.navigate(['/contactlist']);
    }))
  }

  get fc() {                                                   
    return this.contactForm.controls;
  }

}
 