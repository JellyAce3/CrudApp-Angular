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
  constructor(private add:AddContactService ){}

  ngOnInit(): void {
      this.getContact();
  }

  getContact(){
    this.add.getContact().subscribe((res=>{
      this.data=res;
    }))
  }

  onUserAdded(event: string) {
    // Handle the data sent from the child component here
    console.log(event); // You can log it or do something else with it
    this.getContact(); // You can also refresh the contact list if needed
  }

  //delete
  delete(id:number){
    this.add.deleteContact(id).subscribe(res=>{
      this.getContact()
    })
  }
  
  
  
}
  



