import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardViewComponent } from './board-view/board-view.component';
import { GameViewComponent } from './game-view/game-view.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    BoardViewComponent,
    GameViewComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BoardViewComponent,
    GameViewComponent,
  ]
})
export class MemoryModule { }
