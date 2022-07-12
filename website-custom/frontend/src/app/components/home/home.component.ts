import { Component, OnInit } from '@angular/core';
import { faCircle, faCircleArrowRight, faMessage, faMotorcycle, faPhone, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public faMotorcycle = faMotorcycle;
  public fa = faMessage;
  public fa2 = faPhoneFlip;
  public fa3 = faCircleArrowRight;

  constructor() { }

  ngOnInit(): void {
  }

}
