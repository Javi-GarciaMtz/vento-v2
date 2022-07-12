import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { Motorcycle } from '../../models/motorcycle';
import { faCircleCheck, faCreditCard } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-motorcycle-plans',
  templateUrl: './motorcycle-plans.component.html',
  styleUrls: ['./motorcycle-plans.component.css']
})
export class MotorcyclePlansComponent implements OnInit {
  public page_title: string;
  public price: number;
  public motorcycle: Motorcycle;
  public projects: any;
  
  /* Icons */
  public faCircleCheck = faCircleCheck;
  public fa = faCreditCard;

  constructor(
    private _dataService: DataService
  ) {
    this.motorcycle = this._dataService.motorcycle;
    this.page_title = 'Planes de la motocicleta: '+this.motorcycle.model;
    console.log(this.page_title);
    this.price = 0;
    this.projects = Array('Proyecto #1', 'Proyecto #2', 'Proyecto #3', 'Proyecto #4','Proyecto #5');
    console.log(this.motorcycle);
   }

  ngOnInit(): void {
    this.PMT(104);
  }

  PMT(n: number) {
    let PV = this.motorcycle.min_price - (this.motorcycle.min_price * 0.15);
    let r = (0.58/52);
    /*let op1 = 1/ Math.pow((1+r), n);
    console.log("1-1(+r): ", op1);
    let pmt = PV / ((1-op1)/ r);*/

    let pmt = PV / ((1- (1/ Math.pow((1+r), n)))/ r);

    this.price = Math.round(pmt);
    return new Intl.NumberFormat('en-IN').format(Math.round(pmt));
  }

  per_month(n: number) {
    return new Intl.NumberFormat('en-IN').format(Math.round(this.motorcycle.min_price/n));
  }

  down_payment() {
    return new Intl.NumberFormat('en-IN').format(Math.round(this.motorcycle.min_price*0.15));
  }

}
