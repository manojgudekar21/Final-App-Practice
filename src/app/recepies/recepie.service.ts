import { Injectable } from '@angular/core';
import { Recepie } from '../shared/recepie.model';
import { Subject } from 'rxjs';
import { Ingrident } from '../shared/ingrident.model';

@Injectable({
  providedIn: 'root'
})
export class RecepieService {

  changedRecepie = new Subject<Recepie>();
  
  constructor() { }

  private recepies:Recepie[] = [
    new Recepie("Fruit Custurd","Its so delecious","https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/fruit-custard-recipe.jpg",
      [
        new Ingrident("apple", 5),
        new Ingrident("annar", 4),
      ]
    ),
    new Recepie("Green Salad","Its so Healthy","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLs2Mk7SNHpjBHbl2cPtwanA_D_KFnB2fZdQ&s",
      [
        new Ingrident("palak", 2),
        new Ingrident("cucumber", 3),
      ]
    )
  ]

  getRecepies(){
    return this.recepies.slice()
  }
  getRecepieByIndex(index:number){
    return this.recepies[index];
  }
  
}
