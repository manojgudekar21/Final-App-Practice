import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingrident } from 'src/app/shared/ingrident.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('f') formdata: NgForm;
  editMode = false;
  id:number;
  ingrident:Ingrident;

  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {
    this.slService.onSelectedIngrident.subscribe((index:number)=>{
      this.id = index;
      this.editMode = true
      this.ingrident = this.slService.getIngridentacctoindex(this.id)
      this.formdata.setValue({
        name: this.ingrident.name,
        amount: this.ingrident.amount
      })
    })
  }

  onSubmit() {
    const Name = this.formdata.value.name;
    const Amount = this.formdata.value.amount;
    const NewIngrident = new Ingrident(Name, Amount)
    this.slService.onAddingNewIngrident(NewIngrident)
    this.formdata.reset()
  }

  onDelete(){
    this.slService.onDeleteIngrident(this.id)
    this.formdata.reset()
    this.editMode = false
  }

  onClear(){
    this.formdata.reset();
  }

}
