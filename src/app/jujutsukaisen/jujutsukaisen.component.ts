import { JUJUTSUKAISEN } from './../bdd/jujutsuKaisen';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MymodalcomponentComponent } from '../mymodalcomponent/mymodalcomponent.component';
import { Anime } from './../modeles/anime';

@Component({
  selector: 'app-jujutsukaisen',
  templateUrl: './jujutsukaisen.component.html',
  styleUrls: ['./jujutsukaisen.component.scss']
})
export class JujutsukaisenComponent implements OnInit {
  JUJUTSUKAISEN = JUJUTSUKAISEN;
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

