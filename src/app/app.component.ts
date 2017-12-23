import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Money } from 'money';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HD Exercise v4';
  data: any = {};
  money = [];
  
  constructor(private http:Http) {
  	this.http.get('assets/data.json')
  				.subscribe(res=>this.data = res.json());
  }
  


}


