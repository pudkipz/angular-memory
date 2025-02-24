import { Component } from '@angular/core';

@Component({
  selector: 'app-board-view',
  standalone: false,
  templateUrl: './board-view.component.html',
  styleUrl: './board-view.component.css'
})
export class BoardViewComponent {
  cols = [0, 1, 2, 3,];
  rows = [0, 1, 2, 3,];
}
