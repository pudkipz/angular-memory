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

  handleCardClicked(card: Card) {
    // maybe some of this should be in game service

    // If two cards are already selected, it's only possible to unselect either of those. Also, don't handle found cards.
    if ((card.found) || this.selectedCard1 && this.selectedCard2 && !(card == this.selectedCard1 || card == this.selectedCard2)) return;
    
    // friggin idk. Update cards.
    if (card == this.selectedCard1) {
      card.selected = false;
      this.selectedCard1 = null;
    } else if (!this.selectedCard1) {
      card.selected = true;
      this.selectedCard1 = card;
    } else if (card == this.selectedCard2) {
      card.selected = false;
      this.selectedCard2 = null;
    } else {
      card.selected = true;
      this.selectedCard2 = card;
    }

    if (this.selectedCard1 && this.selectedCard2 && this.selectedCard1.value == this.selectedCard2.value) {
      this.selectedCard1.found = true;
      this.selectedCard2.found = true;
      this.selectedCard1.selected = false;
      this.selectedCard2.selected = false;
      this.selectedCard1 = null;
      this.selectedCard2 = null;
    }
  }
}
