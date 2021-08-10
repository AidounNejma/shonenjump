import { Anime } from './../modeles/anime';
import { SAMURAICHAMPLOO } from './../bdd/samuraiChamploo';
import { Component, OnInit } from '@angular/core';
import { MymodalcomponentComponent } from '../mymodalcomponent/mymodalcomponent.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-samuraichamploo',
  templateUrl: './samuraichamploo.component.html',
  styleUrls: ['./samuraichamploo.component.scss']
})
export class SamuraichamplooComponent implements OnInit {
SAMURAICHAMPLOO = SAMURAICHAMPLOO;
Anime: Anime = new Anime();

  constructor(public modalService : NgbModal){
  }

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


