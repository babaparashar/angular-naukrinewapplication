import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, RequiredValidator } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  constructor(private fb: FormBuilder) { }
loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group ({
      username: new FormControl('', Validators.compose([Validators.email,Validators.required])),
      password: new FormControl('', Validators.compose([Validators.minLength(6),Validators.required])),
      
    })
  }
  onSubmit(){
    console.log(this.loginForm.value);
  }

}
