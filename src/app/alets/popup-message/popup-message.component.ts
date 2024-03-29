import {Component, Input, OnInit} from '@angular/core';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="alertalert-warning" role="alert">
    <div class="modal-header">
      <h4 class="modal-title alert">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body alert alert-info">
      <p>{{name}}</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
    </div>
  `
})
export class PopupMessageComponent{

  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}

}
