import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AddContactService } from 'src/app/services/addContact.service';
import { contact } from 'src/app/shared/model/contactmodel';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  @Output() userAdded = new EventEmitter<string>();
  @Input() existingContact: contact | undefined; // Input property for existing contact
  contactForm!: FormGroup | any;
  isSubmitted = false;

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private add: AddContactService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, this.emailValidator]],
      phonenumber: ['', [Validators.required, Validators.minLength(11)]],
    });

    // If an existing contact is provided, initialize the form with its data
    if (this.existingContact) {
      this.contactForm.patchValue(this.existingContact);
    }
  }

  submitContact(data: contact) {
    this.isSubmitted = true;
    if (this.contactForm.invalid) return;

    if (this.existingContact) {
      // Update an existing contact
      this.add.updateContact(this.existingContact.id, data).subscribe((res) => {
        this.isSubmitted = false;
        this.userAdded.emit('Contact updated successfully');
      });
    } else {
      // Add a new contact
      this.add.addContact(data).subscribe((res) => {
        this.contactForm.reset();
        this.isSubmitted = false;
        this.userAdded.emit('Contact added successfully');
      });
    }
  }

  get fc() {
    return this.contactForm.controls;
  }

  limitInputLength(event: any) {
    const inputValue = event.target.value;
    if (inputValue.length > 11) {
      // Truncate the input value to 11 digits
      event.target.value = inputValue.slice(0, 11);
    }
  }

  emailValidator(control: AbstractControl): ValidationErrors | null {
    const email = control.value as string;
    if (email && !email.endsWith('@gmail.com')) {
      return { invalidEmail: true };
    }
    return null;
  }
}
