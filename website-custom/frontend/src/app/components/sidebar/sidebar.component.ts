import { Component, OnInit } from '@angular/core';
import { faBorderAll, faDeleteLeft, faEdit, faGaugeHigh, faMotorcycle, faPlusCircle, faTags, faTrash, faUserLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  faUserLock = faUserLock;
  faMotorcycle = faMotorcycle;
  faPlusCircle = faPlusCircle;
  faBorderAll = faBorderAll;
  faGaugeHigh = faGaugeHigh;
  faEdit = faEdit;
  faTrash = faTrash;
  faTags = faTags;

  constructor() { }

  ngOnInit(): void {
  }

}
