import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {SignupLoginService} from '../../services/signup-login.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  errors:any=[]

  constructor(private signinLogin: SignupLoginService, private _router: Router) { }

  ngOnInit(): void {
  }

  signinForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  alertwithFailed(){
    Swal.fire('Oops...', 'something went wrong', 'error')
  }
  navigate(){
    this._router.navigateByUrl('/home');
  }

  signinUser(data:any){
    var success= this.signinLogin.userSignin(data).subscribe(
      res => {
        if (success){
          console.log(res),
          this.navigate()

        }
       
      },
      err =>{
        console.log(err.error)
        this.errors = err.error;

      }
          
)}

}
