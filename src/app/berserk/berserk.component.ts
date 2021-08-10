import { Anime } from './../modeles/anime';
import { BERSERK } from './../bdd/berserk';
import { Component, OnInit } from '@angular/core';
import { MymodalcomponentComponent } from '../mymodalcomponent/mymodalcomponent.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-berserk',
  templateUrl: './berserk.component.html',
  styleUrls: ['./berserk.component.scss']
})
export class BerserkComponent implements OnInit {
  BERSERK = BERSERK;
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
