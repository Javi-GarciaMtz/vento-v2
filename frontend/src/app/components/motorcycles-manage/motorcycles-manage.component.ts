import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { MotorcycleService } from "../../services/motorcycle.service";
import { faImage, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { global } from "../../services/global";
import { DataService } from "../../services/data.service";
import { Motorcycle } from "../../models/motorcycle";

@Component({
  selector: 'app-motorcycles-manage',
  templateUrl: './motorcycles-manage.component.html',
  styleUrls: ['./motorcycles-manage.component.css'],
  providers: [MotorcycleService]
})

export class MotorcyclesManageComponent implements OnInit {

  public faPenToSquare = faPenToSquare;
  public faTrashCan = faTrashCan;
  public faImage = faImage;
  public url: string;
  public data: any;

  constructor(
    public _http: HttpClient,
    private _router: Router,
    public _dataService: DataService
  ) {
    this.url = global.url;
   }

  ngOnInit(): void {
    this._http.get(this.url + 'motorcycle/datatable').subscribe(data => {
    this.data = data;
    console.log(data);
    // console.log(this.data);

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

  modify_motorcycle(id:any) {
    // Se busca la moto de la busqueda del manage
    for(var i=0; i<this.data.length; i++) {
      if(this.data[i].id == id) {
        // console.log(this.data[i]);
        this._dataService.motorcycle = new Motorcycle(
          id,
          this.data[i].model,
          this.data[i].min_price,
          this.data[i].max_price,
          this.data[i].onsale,
          this.data[i].stock_quantity,
          this.data[i].stock_status,
          this.data[i].rating_count,
          this.data[i].average_rating,
          this.data[i].total_sales,
          this.data[i].tax_status,
          this.data[i].tax_class,
          this.data[i].image);
        break;
      }
    }

    // Se redirige al update
    this._router.navigate(['update-motorcycle']);
  }

}
