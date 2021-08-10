import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { ProfilComponent } from './profil/profil.component';
import { BerserkComponent } from './berserk/berserk.component';
import { AkiraComponent } from './akira/akira.component';
import { OnepieceComponent } from './onepiece/onepiece.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AccordionComponent } from './accordion/accordion.component';
import { SamuraichamplooComponent } from './samuraichamploo/samuraichamploo.component';
import { GoldenboyComponent } from './goldenboy/goldenboy.component';
import { CowboybebopComponent } from './cowboybebop/cowboybebop.component';
import { DeathnoteComponent } from './deathnote/deathnote.component';
import { GtoComponent } from './gto/gto.component';
import { JojosbizarreadventureComponent } from './jojosbizarreadventure/jojosbizarreadventure.component';
import { MymodalcomponentComponent } from './mymodalcomponent/mymodalcomponent.component';
import { JujutsukaisenComponent } from './jujutsukaisen/jujutsukaisen.component';
import { FmaComponent } from './fma/fma.component';
import { DemonslayerComponent } from './demonslayer/demonslayer.component';
import { VinlandsagaComponent } from './vinlandsaga/vinlandsaga.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    ProfilComponent,
    BerserkComponent,
    AkiraComponent,
    OnepieceComponent,
    CarouselComponent,
    AccordionComponent,
    SamuraichamplooComponent,
    GoldenboyComponent,
    CowboybebopComponent,
    DeathnoteComponent,
    GtoComponent,
    JojosbizarreadventureComponent,
    MymodalcomponentComponent,
    JujutsukaisenComponent,
    FmaComponent,
    DemonslayerComponent,
    VinlandsagaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

  ],
  entryComponents:[
    MymodalcomponentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
