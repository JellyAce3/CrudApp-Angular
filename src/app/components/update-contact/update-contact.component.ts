import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddContactService } from 'src/app/services/addContact.service';
import { contact } from 'src/app/shared/model/contactmodel';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit{

  public contactId!:number;
  public contactData:contact ={} as contact;
  isSubmitted=false;
  constructor(private add:AddContactService, private activatedRoute:ActivatedRoute, private route:Router, private toastr:ToastrService){}

  ngOnInit(): void {



      this.activatedRoute.params.subscribe((param:Params)=>{
          this.contactId = param['id']
      })
      this.add.fetch(this.contactId).subscribe((data:contact) =>{
        this.contactData = data;
        console.log(data);
      })


  }
 update(){
  
  this.add.updatecontact(this.contactData,this.contactId).subscribe((res:contact)=>{
    this.toastr.success('yeheeyyy')
    this.route.navigate(["/contactlist"])
    return;
  });
 }

}
