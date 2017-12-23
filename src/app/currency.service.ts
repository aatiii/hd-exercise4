import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

export class currencyService {
	constructor(private _http: HttpClient) {}

	rates() {
		return .this._http.get("http://api.fixer.io/latest")
			.map(result => result);
	}
}