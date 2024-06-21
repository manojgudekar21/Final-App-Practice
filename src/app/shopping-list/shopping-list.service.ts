import { Injectable } from '@angular/core';
import { Ingrident } from '../shared/ingrident.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  onSelectedIngrident = new Subject<number>();
  onChangedIngrident = new Subject<Ingrident[]>();

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
  onAddingNewIngrident(ingrident:Ingrident){
    this.ingridents.push(ingrident)
    this.onChangedIngrident.next(this.ingridents.slice())
  }
  getIngridentacctoindex(index:number){
    const ingrident = this.ingridents[index];
    return ingrident;
  }
  onDeleteIngrident(index:number){
    this.ingridents.splice(index,1);
    this.onChangedIngrident.next(this.ingridents.slice());
  }

}
