import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('TestName', 'Test Decr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3mvK-AdTor1dyWZ9J_d0RAGfBTqgY5W8FtADQwnKyG2Ih1i0OtA')
  ];


  constructor() { }

  ngOnInit() {
  }

}
