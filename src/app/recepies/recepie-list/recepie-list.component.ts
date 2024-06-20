import { Component, OnInit } from '@angular/core';
import { Recepie } from 'src/app/shared/recepie.model';
import { RecepieService } from '../recepie.service';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {

  constructor(private recepieServcie:RecepieService) { }

  ngOnInit(): void {
    this.recepies = this.recepieServcie.getRecepies()
  }
  
  recepies:Recepie[] ;

}
