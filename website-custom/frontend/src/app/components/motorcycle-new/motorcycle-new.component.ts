import { Component, OnInit } from '@angular/core';
import { Motorcycle } from '../../models/motorcycle';
import { global } from '../../services/global';
import { MotorcycleService } from "../../services/motorcycle.service";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-motorcycle-new',
  templateUrl: './motorcycle-new.component.html',
  styleUrls: ['./motorcycle-new.component.css'],
  providers: [MotorcycleService]
})
export class MotorcycleNewComponent implements OnInit {

  public page_title: string;
  public url: string;
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
    private _router: Router,
    private _motorcycleService: MotorcycleService,
    private _toastr: ToastrService
  ) {
    this.page_title = "Agregar Nueva Motocicleta Prueba";
    this.motorcycle = new Motorcycle(1, '', 1, 2, 0, 0, 'instock', 0, 0, 0, 'tax status', 'tax class', '');
    this.url = global.url;
  }

  ngOnInit(): void {
  }

  on_submit(form:any) {

    this._motorcycleService.add_motorcycle(this.motorcycle).subscribe(
      response => {

        this._toastr.success( response["motorcycle"]["model"]+" fue agregada correctamente.", "Exito al Guardar!", {
          closeButton: true
        });

        form.reset();
        this._router.navigate(['manage-motorcycle']);
      },
      error => {
        console.log(<any>error);
        this._toastr.error('ERROR: ' + error["error"]["message"], 'Error al Guardar!', {
          // timeOut: 3000,
          closeButton: true,
          // progressBar: true
        });
      }
    );

  }

  image_upload(datos:any) {
    if(datos.status == 200) {
      this.motorcycle.image = datos.body.image;
      this._toastr.success( "La Foto fue Agregada Correctamente.", "Exito al Guardar!", {
        closeButton: true
      });
    } else {
      this._toastr.error( "La Foto NO fue Agregada Correctamente.", "Error al Guardar!", {
        closeButton: true
      });
    }
  }

}
