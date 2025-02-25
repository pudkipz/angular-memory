import { Injectable } from '@angular/core';
import { Card } from './memory/model/card';
import { images } from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  cards: Card[] = [];
  nRows = 4;
  nCols = 5;

  constructor() {
    this.newGame();
  }

  newGame() {
    const values = Array.from(Array((this.nRows * this.nCols) / 2).keys()).concat(Array.from(Array((this.nRows * this.nCols) / 2).keys()));
    this.cards = [];
    for (let y: number = 0; y < this.nRows; y++) {
      for (let x: number = 0; x < this.nCols; x++) {
        const valueIndex = Math.floor(Math.random() * values.length);
        const value = values.splice(valueIndex, 1)[0];
        // console.log(values)
        this.cards.push({x, y, value: value, image: images[value]})
      }
    }
    console.log(this.cards)
  }
}
