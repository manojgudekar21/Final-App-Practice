import { Component, OnInit } from '@angular/core';
import { Ingrident } from '../shared/ingrident.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {
    this.ingridents = this.slService.getIngridents();
    this.slService.onChangedIngrident.subscribe((ingridents:Ingrident[])=>{
      this.ingridents = ingridents
    })
  }

  ingridents:Ingrident[] ;

  emitIndex(i:number){
    this.slService.onSelectedIngrident.next(i);
  }

}
