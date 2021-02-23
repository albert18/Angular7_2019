import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe - 1', 'This is simply a test - 1', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [ new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
    new Recipe('A Test Recipe - 2', 'This is simply a test - 2 ', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [ new Ingredient('Buns', 2), new Ingredient('Meat', 1)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
