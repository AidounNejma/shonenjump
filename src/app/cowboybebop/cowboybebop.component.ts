import { COWBOYBEBOP } from './../bdd/cowboybebop';
import { Anime } from './../modeles/anime';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MymodalcomponentComponent } from '../mymodalcomponent/mymodalcomponent.component';

@Component({
  selector: 'app-cowboybebop',
  templateUrl: './cowboybebop.component.html',
  styleUrls: ['./cowboybebop.component.scss']
})
export class CowboybebopComponent implements OnInit {
COWBOYBEBOP = COWBOYBEBOP;
Anime: Anime = new Anime();

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
