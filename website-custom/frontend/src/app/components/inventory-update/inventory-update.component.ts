import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { global } from "../../services/global";
import { faCalendarCheck, faImage, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-inventory-update',
  templateUrl: './inventory-update.component.html',
  styleUrls: ['./inventory-update.component.css']
})
export class InventoryUpdateComponent implements OnInit {
  public page_title: string;
  public data: any;
  public url: string;
  public faPenToSquare = faPenToSquare;
  public faTrashCan = faTrashCan;
  public faImage = faImage;
  public fa = faCalendarCheck;
  public afuConfig = {
    multiple : false,
    formatsAllowed : ".csv, .xlsx, .xlsm, .xlsb, .xltx, .xml",
    maxSize : 50,
    uploadAPI: {
      url : "motorcycle/upload",
      headers : {"Authorization":"aqui hay una autorizacion"}
    },

    theme: "dragNDrop",
    hideProgressBar : false,
    hideResetBtn : false,
    hideSelectBtn : false,
    fileNameIndex : true,
    autoUpload : true,

    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Attach Files...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };

  constructor(
    public _http: HttpClient,
  ) {
    this.url = global.url;
    this.page_title = "Actualizar Inventario.";
   }

  ngOnInit(): void {
    this._http.get(this.url + 'motorcycle/datatable').subscribe(data => {
      this.data = data;

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

  file_upload(event : any) {
    console.log("Método actualizar inventario!");
  }

  format(num: number) {
    return new Intl.NumberFormat('en-IN').format(num);
  }

}
