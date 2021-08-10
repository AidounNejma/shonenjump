import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AkiraComponent } from './akira/akira.component';
import { BerserkComponent } from './berserk/berserk.component';
import { CowboybebopComponent } from './cowboybebop/cowboybebop.component';
import { DeathnoteComponent } from './deathnote/deathnote.component';
import { DemonslayerComponent } from './demonslayer/demonslayer.component';
import { FmaComponent } from './fma/fma.component';
import { GoldenboyComponent } from './goldenboy/goldenboy.component';
import { GtoComponent } from './gto/gto.component';
import { JojosbizarreadventureComponent } from './jojosbizarreadventure/jojosbizarreadventure.component';
import { JujutsukaisenComponent } from './jujutsukaisen/jujutsukaisen.component';
import { MainComponent } from './main/main.component';
import { OnepieceComponent } from './onepiece/onepiece.component';
import { ProfilComponent } from './profil/profil.component';
import { SamuraichamplooComponent } from './samuraichamploo/samuraichamploo.component';
import { VinlandsagaComponent } from './vinlandsaga/vinlandsaga.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'profil',
    component: ProfilComponent,
  },
  {
    path:'akira',
    component: AkiraComponent,
  },
  {
    path: 'berserk',
    component: BerserkComponent,
  },
  {
    path:'onepiece',
    component: OnepieceComponent,
  },
  {
    path:'samuraichamploo',
    component: SamuraichamplooComponent,
  },
  {
    path:'goldenboy',
    component: GoldenboyComponent,
  },
  {
    path:'cowboybebop',
    component: CowboybebopComponent,
  },
  {
    path:'deathnote',
    component: DeathnoteComponent,
  },
  {
    path: 'gto',
    component: GtoComponent,
  },
  {
    path: 'jojosbizarreadventure',
    component: JojosbizarreadventureComponent,
  },
  {
    path:'jujutsukaisen',
    component: JujutsukaisenComponent,
  },
  {
    path: 'fma',
    component: FmaComponent,
  },
  {
    path: 'demonslayer',
    component: DemonslayerComponent,
  },
  {
    path: 'vinlandsaga',
    component: VinlandsagaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
