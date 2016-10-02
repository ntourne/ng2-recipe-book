import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [];
    dummyRecipe = new Recipe('Dummy', 'Dummy', 'http://guides.global/images/guides/global/dummy_web_page.jpg');

  constructor() { }

  ngOnInit() {
  }

}
