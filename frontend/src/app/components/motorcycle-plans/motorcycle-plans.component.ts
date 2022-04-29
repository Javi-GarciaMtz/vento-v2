import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motorcycle-plans',
  templateUrl: './motorcycle-plans.component.html',
  styleUrls: ['./motorcycle-plans.component.css']
})
export class MotorcyclePlansComponent implements OnInit {
  public price: number;

  constructor() {
    this.price = 0;
   }

  ngOnInit(): void {
    this.PMT(50999, 104);
  }

  PMT(price: number, n: number) {
    let PV = price - (price * 0.15);
    console.log("PV: ", PV);
    let r = (0.58/n);
    console.log("r: ",r);


    let op1 = 1/ Math.pow((1+r), n);
    console.log("1-1(+r): ", op1);
    //let aux = 1-(1/xd);
    //console.log(aux);

    let pmt = PV / ((1-op1)/ r);
    this.price = Math.round(pmt);
    console.log(pmt);
  }

}
