import { Component } from '@angular/core';
import {ServicioDeAutentService} from './servicio-de-autent.service';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styles: []
})
export class AppComponent {
  constructor(public authComponent: ServicioDeAutentService){

  }
  title = 'Heroes';
}
