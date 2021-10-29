import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService{
  private apiServerUrl = "localhost:8080";

  constructor(private http: HttpClient){}

}
