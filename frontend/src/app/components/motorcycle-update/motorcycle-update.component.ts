import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { Motorcycle } from "../../models/motorcycle";

@Component({
  selector: 'app-motorcycle-update',
  templateUrl: './motorcycle-update.component.html',
  styleUrls: ['./motorcycle-update.component.css']
})
export class MotorcycleUpdateComponent implements OnInit {

  constructor(
    public _dataService: DataService
  ) { }

  ngOnInit(): void {
    console.log("----------------");
    console.log("DESDE UPDATE", this._dataService.motorcycle);
  }

}
