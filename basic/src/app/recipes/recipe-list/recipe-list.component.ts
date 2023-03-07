import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: [``],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'test recipe',
      'this is simple test',
      'https://cdn.britannica.com/84/188484-050-F27B0049/lemons-tree.jpg'
    ),
  ];
  constructor() {}
}
