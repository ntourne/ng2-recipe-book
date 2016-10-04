import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('Recipe 1', 'Recipe 1', 'http://images.media-allrecipes.com/userphotos/250x250/00/69/35/693521.jpg', [
            new Ingredient('French Fries', 2),
            new Ingredient('Pork Meat', 1)
        ]),
        new Recipe('Recipe 2', 'Recipe 2', 'http://www.simplebites.net/wp-content/uploads/2012/01/orzo-ingredients.jpg', []),
        new Recipe('Recipe 3', 'Recipe 3', 'http://topinspired.com/wp-content/uploads/2013/08/healthy-food-recipes-for-kids_01.jpg', [])
    ];

    constructor() { }

    getRecipes() {
        return this.recipes;
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

}
