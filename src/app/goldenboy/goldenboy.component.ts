import { GOLDENBOY } from './../bdd/goldenBoy';
import { Component, OnInit } from '@angular/core';
import { Anime } from '../modeles/anime';
import { MymodalcomponentComponent } from '../mymodalcomponent/mymodalcomponent.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-goldenboy',
  templateUrl: './goldenboy.component.html',
  styleUrls: ['./goldenboy.component.scss']
})
export class GoldenboyComponent implements OnInit {
GOLDENBOY = GOLDENBOY;
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
