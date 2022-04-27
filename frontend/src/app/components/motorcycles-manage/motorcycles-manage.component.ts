import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MotorcycleService } from "../../services/motorcycle.service";
import { global } from "../../services/global";

declare var jQuery:any;
declare var $:any;



@Component({
  selector: 'app-motorcycles-manage',
  templateUrl: './motorcycles-manage.component.html',
  styleUrls: ['./motorcycles-manage.component.css'],
  providers: [MotorcycleService]
})
export class MotorcyclesManageComponent implements OnInit {

  public url: string;
  public data: any;

  constructor(
    public _http: HttpClient
  ) {
    this.url = global.url;
   }

  ngOnInit(): void {
    this._http.get(this.url + 'motorcycle/datatable').subscribe(data => {
    this.data = data;
    console.log(data);
    console.log(this.data);

    setTimeout(()=>{
        $('#datatableexample').DataTable({
        pagingType: 'full_numbers',
        pageLength: 5,
        processing: true,
        lengthMenu : [5, 10, 25],
        /*language: {
            "decimal": "",
            "emptyTable": "No hay información",
            "info": "Mostrando START a END de TOTAL Entradas",
            "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
            "infoFiltered": "(Filtrado de MAX total entradas)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Mostrar MENU Entradas",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "Buscar:",
            "zeroRecords": "Sin resultados encontrados",
            "paginate": {
                "first": "Primero",
                "last": "Ultimo",
                "next": "Siguiente",
                "previous": "Anterior"
            }
        }*/
        });
    }, 1);
    }, error => console.error(error));
  }

}
