import { Component, OnInit } from '@angular/core';
import { RecepieService } from '../recepie.service';
import { Recepie } from 'src/app/shared/recepie.model';
import { ActivatedRoute, Params } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recepie-details',
  templateUrl: './recepie-details.component.html',
  styleUrls: ['./recepie-details.component.css']
})
export class RecepieDetailsComponent implements OnInit {

  recepie: Recepie;
  id: number;

  constructor(private recepieService: RecepieService, private route: ActivatedRoute,
    private slService: ShoppingListService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.recepie = this.recepieService.getRecepieByIndex(this.id)
    })
  }

  onClick() {
    this.slService.onAddingIngridents(this.recepie.ingridents)
  }

}
