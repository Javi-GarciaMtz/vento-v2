import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { MotorcycleService } from "../../services/motorcycle.service";
import { faImage, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
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

  public faPenToSquare = faPenToSquare;
  public faTrashCan = faTrashCan;
  public faImage = faImage;
  public url: string;
  public data: any;

  constructor(
    public _http: HttpClient,
    private _router: Router,
    public _dataService: DataService,
    private _toastr: ToastrService,
    private _motorcycleService: MotorcycleService
  ) {
    this.url = global.url;
   }

  format(num: number) {
    return new Intl.NumberFormat('en-IN').format(num);
  }

  ngOnInit(): void {
    // console.log("INIT");
    // console.log(new Intl.NumberFormat('en-IN').format(3500021.456));
    // console.log("FIN");
    this._http.get(this.url + 'motorcycle/datatable').subscribe(data => {
    this.data = data;
    // console.log(data);
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
    // console.log("moto a borrar", id);
    this._motorcycleService.delete_motorcycle(id).subscribe(
      response => {
        if(response && response.status) {
          // console.log("Si funciono XD");
          for(var i=0; i<this.data.length; i++) {
            if(this.data[i].id == id) {
              this.data.splice(i);
            }
          }
          this._toastr.success( "La moto se ha borrado correctamente.", "La moto se ha borrado correctamente!", {
            closeButton: true
          });

        } else {
          // console.log("Error 1");
          this._toastr.error( "La moto NO se ha borrado correctamente.", "La moto NO se ha borrado correctamente.", {
            closeButton: true
          });
        }
      },
      error => {
        // console.log("Error 2 ", <any>error);
        this._toastr.error( "La moto NO se ha borrado correctamente.", "La moto NO se ha borrado correctamente.", {
          closeButton: true
        });
      }
    );

  }

}
