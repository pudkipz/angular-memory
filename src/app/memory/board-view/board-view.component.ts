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
  selectedCard: Card | null = null;

  handleCardClicked(card: Card) {
    if (card == this.selectedCard) {
      this.selectedCard = null;
    } else {
      this.selectedCard = card;
    }
    card.selected = !card.selected;
  }
}
