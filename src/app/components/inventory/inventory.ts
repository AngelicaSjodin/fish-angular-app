import { Component } from '@angular/core';
import { Service } from '../../services/service';


@Component({
  selector: 'app-inventory',
  imports: [],
  templateUrl: './inventory.html',
  styleUrl: './inventory.scss',
})
export class Inventory {
  
  constructor(public services: Service){}

}
