import { Component, OnInit } from '@angular/core';
import { AddContactService } from 'src/app/services/addContact.service';
import { contact } from 'src/app/shared/model/contactmodel';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit{
  data: undefined|contact[]
  constructor(private add:AddContactService){}

  ngOnInit(): void {
      this.getContact();
  }

  getContact(){
    this.add.getContact().subscribe((res=>{
      this.data=res;
    }))
  }

  //delete
  delete(id:number){
    this.add.deleteContact(id).subscribe(res=>{
      this.getContact()
    })
  }
  
}
  



