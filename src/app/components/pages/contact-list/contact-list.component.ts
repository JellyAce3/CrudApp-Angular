import { Component, OnInit, ViewChild } from '@angular/core';
import { AddContactService } from 'src/app/services/addContact.service';
import { contact } from 'src/app/shared/model/contactmodel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  data: undefined | contact[];
  public contactData: contact = {} as contact;
  existingContact: contact | undefined; // Property to hold the existing contact data for updating
  contactToDelete: contact | undefined; // Property to hold the contact to be deleted

  @ViewChild('deleteModal') deleteModal: any; // Template reference variable for the delete modal

  constructor(private add: AddContactService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getContact();
  }

  getContact() {
    this.add.getContact().subscribe((res) => {
      this.data = res;
    });
  }

  // Trigger the update mode and pass the existing contact data to the child component
  editContact(contactData: contact) {
    console.log('Editing contact:', contactData);
    this.existingContact = contactData;
  }

  // Handle the update operation
  updateContact(contactData: contact) {
    // Call the update function in your service
    this.add.updateContact(contactData.id, contactData).subscribe((res) => {
      // Clear the existing contact data to exit the update mode
      this.existingContact = undefined;
      // Refresh the contact list
      this.getContact();
    });
  }
  onUserAdded(event: string) {
    // Handle the data sent from the child component here
    console.log(event); // You can log it or do something else with it
    this.getContact(); // You can also refresh the contact list if needed
  }

  //delete
  delete(id: number) {
    this.add.deleteContact(id).subscribe((res) => {
      this.getContact();
    });
  }

  openDeleteModal(contact: contact) {
    this.contactToDelete = contact;
    const modalRef = this.modalService.open(this.deleteModal, {
      centered: true,
    });
    modalRef.componentInstance.confirmDelete.subscribe(() =>
      this.deleteContact()
    );
    modalRef.componentInstance.closeModalEvent.subscribe(() =>
      this.resetContactToDelete()
    );
  }
  resetContactToDelete() {
    this.contactToDelete = undefined;
  }
  deleteContact() {
    if (this.contactToDelete) {
      this.add.deleteContact(this.contactToDelete.id).subscribe((res) => {
        this.getContact();
        this.contactToDelete = undefined; // Reset the contactToDelete property
        this.modalService.dismissAll(); // Close the delete confirmation modal
      });
    }
  }
}
