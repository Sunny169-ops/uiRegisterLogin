import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SignupLoginService {

  

  constructor(private http: HttpClient) { }

  userSignup(data:any){
    return this.http.post('http://localhost:3000/adduser',data)
  }
  userSignin(data:any){
    return this.http.post('http://localhost:3000/getuser',data)
  }
}
