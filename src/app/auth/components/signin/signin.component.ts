import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  user=new User();
  msg="";
  constructor(private router :Router,private service:UserService) { }

  ngOnInit(): void {
  }
  SigninUser(){
    this.service.SigninUserService(this.user).subscribe(
      data =>{
        console.log("response recieved"),
        alert("login successfull");
        this.router.navigate(['/auth'])
      }
      ,error =>{console.log("exception occured"),
      alert("login failed ! please check your email or password"),
      this.msg="Please check your information !!!"

  })
    

  }

  }
  


