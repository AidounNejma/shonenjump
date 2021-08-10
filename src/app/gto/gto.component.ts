import { Anime } from './../modeles/anime';
import { Component, OnInit } from '@angular/core';
import { GTO } from './../bdd/gto';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MymodalcomponentComponent } from '../mymodalcomponent/mymodalcomponent.component';

@Component({
  selector: 'app-gto',
  templateUrl: './gto.component.html',
  styleUrls: ['./gto.component.scss']
})
export class GtoComponent implements OnInit {
GTO = GTO;
Anime : Anime = new Anime();

constructor(public modalService : NgbModal) { }

ngOnInit(): void {
}
open(episodeObject: any) {
  console.log(episodeObject);
  const modalRef = this.modalService.open(MymodalcomponentComponent);
  modalRef.componentInstance.my_modal_title = episodeObject.title;
  modalRef.componentInstance.my_modal_link = episodeObject.link1;
  modalRef.componentInstance.my_modal_content = episodeObject.summary;
  modalRef.componentInstance.my_modal_created = episodeObject.created;
}
}
