import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AddContactService } from 'src/app/services/addContact.service';
import { contact } from 'src/app/shared/model/contactmodel';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  public contactId!: number;
  public contactData: contact = {} as contact;
  isSubmitted = false;
  constructor(
    private add: AddContactService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: Params) => {
      this.contactId = param['id'];
    });
    this.add.fetch(this.contactId).subscribe((data: contact) => {
      this.contactData = data;
      console.log(data);
    });
  }
}
