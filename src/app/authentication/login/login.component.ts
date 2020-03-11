import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = fb.group({
      username: ["", Validators.compose([Validators.required, Validators.maxLength(255), Validators.minLength(4)])],
      password: ["", Validators.compose([Validators.required, Validators.maxLength(255), Validators.minLength(8)])],
    })
  }
  get username() {
    return this.loginForm.get("username") as FormControl;
  }
  get password() {
    return this.loginForm.get("password") as FormControl;
  }
  ngOnInit(): void {
  }

  onSubmit(){
    if(this.loginForm.valid){
      this.authService.login(this.username.value,this.password.value).subscribe(
        data => {
          // console.log(data)
        }
      )
    }
  }
}
