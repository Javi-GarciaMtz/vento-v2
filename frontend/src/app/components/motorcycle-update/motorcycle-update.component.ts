import { Component, OnInit } from '@angular/core';
import { MotorcycleService } from "../../services/motorcycle.service";
import { DataService } from "../../services/data.service";
import { Motorcycle } from '../../models/motorcycle';
import { global } from "../../services/global";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-motorcycle-update',
  templateUrl: './motorcycle-update.component.html',
  styleUrls: ['./motorcycle-update.component.css'],
  providers: [MotorcycleService]
})
export class MotorcycleUpdateComponent implements OnInit {

  public page_title: string;
  public motorcycle: Motorcycle;
  public afuConfig = {
    multiple : false,
    formatsAllowed : ".jpg, .png, .gif, .jpeg",
    maxSize : 50,
    uploadAPI: {
      url : global.url + "motorcycle/upload",
      headers : {"Authorization":"aqui hay una autorizacion"}
    },
    theme : "attachPin",
    // theme : "dragNDrop",
    hideProgressBar : false,
    hideResetBtn : true,
    hideSelectBtn : true,
    fileNameIndex : false,
    autoUpload : true,

    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Elige una foto para la motocicleta',
      afterUploadMsg_success: 'La foto se ha subido correctamente!',
      afterUploadMsg_error: 'ERROR, la foto NO se ha subido correctamente!',
      sizeLimit: 'Size Limit'
    }
  };
  public url;

  constructor(
    private _router: Router,
    private _dataService: DataService,
    private _toastr: ToastrService,
    private _motorcycleService: MotorcycleService,
  ) {
    this.page_title = "Modificar una motocicleta";
    this.motorcycle = this._dataService.motorcycle;
    this.url = global.url;
  }

  ngOnInit(): void {

  }

  image_upload(datos:any) {
    if(datos.status == 200) {
      this.motorcycle.image = datos.body.image;
      this._toastr.success( "La Foto fue Actualizada Correctamente.", "Exito al Actualizar!", {
        closeButton: true
      });
    } else {
      this._toastr.error( "La Foto NO fue Actualizada Correctamente.", "Error al Actualizar!", {
        closeButton: true
      });
    }
  }

  on_submit(form: any) {
    this._motorcycleService.update_motorcycle(this.motorcycle).subscribe(
      response => {
        if(response && response.status == 'success') {
          this._toastr.success(response["motorcycle"]["model"]+" fue Actualizada Correctamente.", "Exito al Actualizar!", {
            closeButton: true
          });
          this._router.navigate(['manage-motorcycle']);
        } else {
          this._toastr.error("Error al actualizar la motocicleta", "Error al Actualizar!", {
            closeButton: true
          });
        }

      },
      error => {
        this._toastr.error('ERROR: ' + error["error"]["message"], "Error al Actualizar!", {
          closeButton: true
        });
      }
    );

  }

}
