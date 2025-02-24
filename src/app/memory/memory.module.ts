import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardViewComponent } from './board-view/board-view.component';
import { PairsViewComponent } from './pairs-view/pairs-view.component';
import { GameViewComponent } from './game-view/game-view.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    BoardViewComponent,
    PairsViewComponent,
    GameViewComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BoardViewComponent,
    PairsViewComponent,
    GameViewComponent,
  ]
})
export class MemoryModule { }
