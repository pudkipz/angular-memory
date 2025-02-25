import { Component, inject } from '@angular/core';
import { GameService } from '../../game.service';
import { Card } from '../model/card';

@Component({
  selector: 'app-board-view',
  standalone: false,
  templateUrl: './board-view.component.html',
  styleUrl: './board-view.component.css'
})
export class BoardViewComponent {
  gameService = inject(GameService);
  cards = this.gameService.cards;
  selectedCard1: Card | null = null;
  selectedCard2: Card | null = null;
  foundValues: number[] = [];

  handleCardClicked(card: Card) {
    console.log(this.foundValues)
    // maybe some of this should be in game service

    // If two cards are already selected, it's only possible to unselect either of those. Also, don't handle found cards.
    if (this.foundValues.includes(card.value) || this.selectedCard1 && this.selectedCard2 && !(card == this.selectedCard1 || card == this.selectedCard2)) return;
    
    // friggin idk. Update cards.
    if (card == this.selectedCard1) {
      this.selectedCard1 = null;
    } else if (!this.selectedCard1 && card != this.selectedCard2) {
      this.selectedCard1 = card;
    } else if (card == this.selectedCard2) {
      this.selectedCard2 = null;
    } else {
      this.selectedCard2 = card;
    }

    if (this.selectedCard1 && this.selectedCard2 && this.selectedCard1.value == this.selectedCard2.value) {
      this.foundValues.push(this.selectedCard1.value);
      this.selectedCard1 = null;
      this.selectedCard2 = null;
    }
  }
}
