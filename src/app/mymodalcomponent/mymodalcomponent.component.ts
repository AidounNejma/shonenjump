import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mymodalcomponent',
  templateUrl: './mymodalcomponent.component.html',
  styleUrls: ['./mymodalcomponent.component.scss']
})
export class MymodalcomponentComponent implements OnInit {
  @Input() my_modal_title: any;
  @Input() my_modal_content: any;
  @Input() my_modal_link: any;
  @Input() my_modal_created: any;

  safeUrl: any;
  constructor(public activeModal: NgbActiveModal, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.my_modal_link);
  }


}
