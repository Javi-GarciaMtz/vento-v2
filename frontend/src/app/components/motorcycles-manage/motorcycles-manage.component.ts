import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { MotorcycleService } from "../../services/motorcycle.service";
import { faCalendarCheck, faImage, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { global } from "../../services/global";
import { DataService } from "../../services/data.service";
import { Motorcycle } from "../../models/motorcycle";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-motorcycles-manage',
  templateUrl: './motorcycles-manage.component.html',
  styleUrls: ['./motorcycles-manage.component.css'],
  providers: [MotorcycleService]
})

export class MotorcyclesManageComponent implements OnInit {

  public page_title: string;
  public faPenToSquare = faPenToSquare;
  public faTrashCan = faTrashCan;
  public faImage = faImage;
  public fa = faCalendarCheck;
  public url: string;
  public data: any;

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _dataService: DataService,
    private _toastr: ToastrService,
    private _motorcycleService: MotorcycleService
  ) {
    this.url = global.url;
    this.page_title = "Productos";
   }

  format(num: number) {
    return new Intl.NumberFormat('en-IN').format(num);
  }

  ngOnInit(): void {

    this._http.get(this.url + 'motorcycle/datatable').subscribe(data => {
    this.data = data;

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

  search_motorcycle(id:any): any {
    // Se busca la moto de la busqueda del manage
    for(var i=0; i<this.data.length; i++) {
      if(this.data[i].id == id) {
        var moto = new Motorcycle(
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
        return moto;
      }
    }

  }

  modify_motorcycle(id:any) {
    // Se guarda la moto a modiciar en el data service
    this._dataService.motorcycle = this.search_motorcycle(id);
    // Se redirige al update
    this._router.navigate(['update-motorcycle']);
  }

  delete_motorcycle(id:any) {
    this._motorcycleService.delete_motorcycle(id).subscribe(
      response => {
        if(response && response.status == 'success') {
          for(var i=0; i<this.data.length; i++) {
            if(this.data[i].id == id) {
              this.data.splice(i,1);
              break;
            }
          }
          this._toastr.success(response["motorcycle"]["model"]+" fue Eliminada Correctamente.", "Exito al Eliminar!", {
            closeButton: true
          });

          $('#'+id).hide();

        } else {
          this._toastr.error("La motocicleta NO se elimino correctamente.", "Error al Eliminar!", {
            closeButton: true
          });
        }

      },
      error => {
        this._toastr.error("La motocicleta NO se elimino correctamente.", "Error al Eliminar!", {
          closeButton: true
        });
      }
    );

  }

  plans_motorcycle(id: number) {
    // Se guarda la moto a modiciar en el data service
    this._dataService.motorcycle = this.search_motorcycle(id);

    // Se redirige a Plans
    this._router.navigate(['plans-motorcycle']);
  }

}
