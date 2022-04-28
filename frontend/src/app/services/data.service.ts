import { Injectable } from '@angular/core';
import { Motorcycle } from "../models/motorcycle";

@Injectable({
    providedIn: 'root'
})

export class DataService {

    public motorcycle: Motorcycle;

    constructor() {
        this.motorcycle = new Motorcycle(0, '', 0, 0, 0, 0, '', 0, 0, 0, '', '', '');
    }

  }