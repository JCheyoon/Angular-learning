import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: [``],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('banana', 3),
  ];
  constructor() {}
}
