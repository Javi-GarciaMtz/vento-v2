import { Component } from '@angular/core';
import { faMotorcycle, faUserLock, faPlusCircle, faBorderAll, faGaugeHigh, faEdit, faTrash, faTags, faListCheck, faBoxArchive, faCartFlatbed, faFilePen, faHomeUser, faHomeAlt, faHomeLg } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vento Motorcycles';
  public faUserLock = faUserLock;
  public faCartFlatbed = faCartFlatbed;
  public faMotorcycle = faMotorcycle;
  public faPlusCircle = faPlusCircle;
  public faBorderAll = faBorderAll;
  public faGaugeHigh = faGaugeHigh;
  public faEdit = faEdit;
  public faTrash = faTrash;
  public faTags = faTags;
  public faListCheck = faListCheck;
  public faBoxArchive = faBoxArchive;
  public faFilePen = faFilePen;
  public faHomeLg = faHomeLg;
}
