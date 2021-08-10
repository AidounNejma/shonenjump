import { Anime } from './../modeles/anime';
import { JOJO } from './../bdd/jojo';
import { Component, OnInit } from '@angular/core';
import { MymodalcomponentComponent } from '../mymodalcomponent/mymodalcomponent.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-jojosbizarreadventure',
  templateUrl: './jojosbizarreadventure.component.html',
  styleUrls: ['./jojosbizarreadventure.component.scss']
})
export class JojosbizarreadventureComponent implements OnInit {
JOJO = JOJO;
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

