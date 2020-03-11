import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MustMatch } from 'src/app/shared/validation/must-match.validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private fb: FormBuilder,private authService:AuthService) {
    this.signUpForm = fb.group({
      fullname: ["",Validators.compose([Validators.required,Validators.maxLength(255),Validators.minLength(2)])],
      email: ["",Validators.compose([Validators.required,Validators.email])],
      username: ["",Validators.compose([Validators.required,Validators.maxLength(255),Validators.minLength(4)])],
      password: ["",Validators.compose([Validators.required,Validators.maxLength(255),Validators.minLength(8)])],
      password_confirmation: ["",Validators.compose([Validators.required,Validators.maxLength(255),Validators.minLength(8)])],
    },{
      validators : MustMatch('password', 'password_confirmation')
    })
  }

  get fullname(){
    return this.signUpForm.get("fullname") as FormControl;
  }
  get email(){
    return this.signUpForm.get("email") as FormControl;
  }
  get username(){
    return this.signUpForm.get("username") as FormControl;
  }
  get password(){
    return this.signUpForm.get("password") as FormControl;
  }
  get password_confirmation(){
    return this.signUpForm.get("password_confirmation") as FormControl;
  }

  ngOnInit(): void {
    // this.signUpForm.valueChanges.subscribe(
    //   data => {
    //     console.log(this.signUpForm)
    //   }
    // )
  }

  onSubmit(){
    if(this.signUpForm.valid){
      this.authService.signUp(this.fullname.value,this.email.value,this.username.value,this.password.value,this.password_confirmation.value).subscribe(
        data => {
          console.log(data)
        }
      )
    }
  }

}
