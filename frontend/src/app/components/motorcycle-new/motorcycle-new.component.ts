import { Component, OnInit } from '@angular/core';
import { Motorcycle } from '../../models/motorcycle';
import { MotorcycleService } from "../../services/motorcycle.service";
import { ToastrService } from 'ngx-toastr';
import { global } from '../../services/global';

@Component({
  selector: 'app-motorcycle-new',
  templateUrl: './motorcycle-new.component.html',
  styleUrls: ['./motorcycle-new.component.css'],
  providers: [MotorcycleService]
})
export class MotorcycleNewComponent implements OnInit {

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

  constructor(
    private _motorcycleService: MotorcycleService,
    private _toastr: ToastrService
  ) {
    this.page_title = "Agregar Nueva Motocicleta";
    this.motorcycle = new Motorcycle(1, '', 1, 2, 0, 0, 'instock', 0, 0, 0, 'tax status', 'tax class', '');
  }

  ngOnInit(): void {
  }

  on_submit(form:any) {

    this._motorcycleService.add_motorcycle(this.motorcycle).subscribe(
      response => {
        console.log(response);

        this._toastr.success( response["motorcycle"]["model"]+" fue agregada correctamente.", "Motocicleta agregada correctamente!", {
          closeButton: true
        });

        form.reset();

      },
      error => {
        console.log(<any>error);
        this._toastr.error('ERROR: ' + error["error"]["message"], 'La motocicleta NO se guardo correctamente', {
          // timeOut: 3000,
          closeButton: true,
          // progressBar: true
        });
      }
    );

  }

  image_upload(datos:any) {
    // console.log(datos);
    if(datos.status == 200) {
      this.motorcycle.image = datos.body.image;
      this._toastr.success( "La foto fue agregada correctamente.", "La foto fue agregada correctamente!", {
        closeButton: true
      });
    } else {
      this._toastr.error( "La foto NO fue agregada correctamente.", "La foto NO fue agregada correctamente!", {
        closeButton: true
      });
    }
  }

}
