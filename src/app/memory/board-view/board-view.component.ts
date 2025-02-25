import { Component, inject } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-board-view',
  standalone: false,
  templateUrl: './board-view.component.html',
  styleUrl: './board-view.component.css'
})
export class BoardViewComponent {
  gameService = inject(GameService);
  cards = this.gameService.cards;
}
