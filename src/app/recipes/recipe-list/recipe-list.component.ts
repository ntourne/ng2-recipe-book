import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [
        new Recipe('Recipe 1', 'Recipe 1', 'http://images.media-allrecipes.com/userphotos/250x250/00/69/35/693521.jpg', []),
        new Recipe('Recipe 2', 'Recipe 2', 'http://www.simplebites.net/wp-content/uploads/2012/01/orzo-ingredients.jpg', []),
        new Recipe('Recipe 3', 'Recipe 3', 'http://topinspired.com/wp-content/uploads/2013/08/healthy-food-recipes-for-kids_01.jpg', [])
    ];
    @Output() recipeSelected = new EventEmitter<Recipe>();

    constructor() { }

    ngOnInit() {
    }

    onSelected(recipe: Recipe) {
        this.recipeSelected.emit(recipe);
    }

}
