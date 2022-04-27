import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Motorcycle } from '../models/motorcycle';
import { global } from "./global";

@Injectable()
export class MotorcycleService {

    public url: string;

    constructor(
        public _http: HttpClient
    ) {
        this.url = global.url;
    }

    test() {
        return "Hola desde el servicio motorcycle";
    }

    add_motorcycle(motorcycle: Motorcycle): Observable<any> {
        let json = JSON.stringify(motorcycle);
        let params = 'json='+json;

        console.log("json:: ", params);

        let headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");

        return this._http.post(this.url+'motorcycle/store', params, {headers: headers});

    }

}
