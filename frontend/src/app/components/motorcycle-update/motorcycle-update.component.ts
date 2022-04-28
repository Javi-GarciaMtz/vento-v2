import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { Motorcycle } from '../../models/motorcycle';
import { global } from "../../services/global";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-motorcycle-update',
  templateUrl: './motorcycle-update.component.html',
  styleUrls: ['./motorcycle-update.component.css']
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
    public _dataService: DataService,
    private _toastr: ToastrService
  ) {
    this.page_title = "Modificar una motocicleta";
    this.motorcycle = this._dataService.motorcycle;
    this.url = global.url;
  }

  ngOnInit(): void {
    // console.log("----------------");
    // console.log("DESDE UPDATE", this._dataService.motorcycle);
  }

  image_upload(datos:any) {
    if(datos.status == 200) {
      this.motorcycle.image = datos.body.image;
      // Actualizamos la imagen en la DB
      this.on_submit(null);
      this._toastr.success( "La foto fue agregada correctamente.", "La foto fue agregada correctamente!", {
        closeButton: true
      });
    } else {
      this._toastr.error( "La foto NO fue agregada correctamente.", "La foto NO fue agregada correctamente!", {
        closeButton: true
      });
    }
  }

  on_submit(form: any) {
    console.log("Actualizando la moto: ", this.motorcycle);
  }

}
