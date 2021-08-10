import { DEMONSLAYER } from './../bdd/demonSlayer';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MymodalcomponentComponent } from '../mymodalcomponent/mymodalcomponent.component';
import { Anime } from '../modeles/anime';

@Component({
  selector: 'app-demonslayer',
  templateUrl: './demonslayer.component.html',
  styleUrls: ['./demonslayer.component.scss']
})
export class DemonslayerComponent implements OnInit {
DEMONSLAYER = DEMONSLAYER;
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
