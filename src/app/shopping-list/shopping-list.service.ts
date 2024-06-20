import { Injectable } from '@angular/core';
import { Ingrident } from '../shared/ingrident.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor() { }

  ingridents:Ingrident[] = [
    new Ingrident("mango",5),
    new Ingrident("orange",55)
  ]

  getIngridents(){
    return this.ingridents.slice();
  }
  onAddingIngridents(ingridents:Ingrident[]){
    this.ingridents.push(...ingridents)
  }
}
