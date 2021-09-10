import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SignupLoginService } from '../../services/signup-login.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  constructor(private signupLogin: SignupLoginService) { }

  ngOnInit(): void {
  }

  alertWithSuccess() {
    Swal.fire('Thank you...', 'Register Successfully', 'success')
  }

  alertwithFailed(){
    Swal.fire('Oops...', 'Email already exists', 'error')
  }
  

  signupForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  clearForm() {
    this.signupForm.reset();
  }

  signupUser(data: any) {

    this.signupLogin.userSignup(data).subscribe(
      res =>{
        console.log(res), 
        this.alertWithSuccess();
        this.clearForm()

      },
      err => {
        console.log(err.error)
        this.alertwithFailed()
      }
);

  }
}
