import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = 'localhost:8080';

  addUser(user: any) {
	user.id = id;
	return this.http.post(this.rootURL + '/addUserNow', user);
  }

}
