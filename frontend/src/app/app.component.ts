import { Component, OnInit } from '@angular/core';
import { faMotorcycle, faUserLock, faPlusCircle, faBorderAll, faGaugeHigh, faEdit, faTrash, faTags, faListCheck, faBoxArchive, faCartFlatbed, faFilePen, faHomeUser, faHomeAlt, faHomeLg, faUser, faUserAlt, faUserAltSlash, faUsers, faUsersBetweenLines, faUsersCog, faUsersGear, faUserShield, faUserPlus, faUsersSlash } from '@fortawesome/free-solid-svg-icons';
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public show_sidebar: boolean;
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
  public faUserShield = faUsersGear;
  public faUserPlus = faUserPlus;

  ngOnInit() {
    //console.log('Webapp cargada correctamente!!');

    // Cada que se haga un routing regresar hasta arriba de la pagina
    this.router.events.subscribe( (event) => {
      if(!(event instanceof NavigationEnd )){
        return;
      }
      window.scrollTo(0,0)
    } );

  }

  constructor(
    private router:Router
  ) {
    this.show_sidebar = false;
  }

  check_side() {
    if(this.show_sidebar) {
      this.show_sidebar = false;
    } else {
      this.show_sidebar = true;
    }
  }
}
