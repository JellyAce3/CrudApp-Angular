import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-delete-confimation',
  templateUrl: './delete-confimation.component.html',
  styleUrls: ['./delete-confimation.component.css']
})
export class DeleteConfimationComponent {

  constructor(public activeModal: NgbActiveModal) {}

  confirmDelete() {
    this.activeModal.close('delete');
  }
}
