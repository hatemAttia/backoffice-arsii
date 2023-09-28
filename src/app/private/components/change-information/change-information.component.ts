import { Component, OnInit } from '@angular/core';
import { UserUpdate } from '../types/user-update';
import { Password } from '../types/password';
import { MemberService, } from '../services/member.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../types/skill';
import { Contact } from '../types/contact';
import { User } from '../types/user';

@Component({
  selector: 'app-change-information',
  templateUrl: './change-information.component.html',
  styleUrls: ['./change-information.component.scss'],
})
export class ChangeInformationComponent implements OnInit {
  user_update = new UserUpdate();
  password_update = new Password();
  msg = '';
  skill=new Skill();
  contact=new Contact();
  categories : Observable<any> | null = null;
  skills : Observable<any> | null = null;
  id!:number;
  user:any;


  constructor(
    private service: MemberService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.service.getUserById().subscribe(
      (data) => {
        console.log(this.user_update);
        this.msg = 'Updated successfully';
        this.user_update = data;
        console.log(data);
        console.log(this.user);
        
      },
      (error) => {
        console.log('Update is failed'), (this.msg = error.error);
        this.user = new User();
      }
    );

    this.categories=this.service.getCategories();
    this.skills=this.service.getSkills();


    

    
  }
  onFileSeleccted(event: any) {
    const file: File = event.target.files[0];
    const userId=this.id
    
    if (file && userId) {
      const formData = new FormData();
      formData.append('file', file); // 'file' should match the key expected by your API
      
      this.service.uploadImage(formData, userId).subscribe(
        (response) => {
          // Handle the success response
          console.log(response);
        },
        (error) => {
          // Handle errors
          console.error(error);
        }
      );
    }
  }
  

  ChangeUser() {
    this.service.updateMember(this.user_update).subscribe(
      (data) => {
        console.log(this.user_update);
        this.msg = 'Updated successfully';
        this.user_update = new UserUpdate();
        alert(this.msg);
      },
      (error) => {
        console.log('Update is failed'), (this.msg = error.error);
        this.user_update = new UserUpdate();
      }
    );
  }
  ChangePassword() {
    this.service.PasswordService(this.password_update).subscribe(
      (data) => {
        console.log(this.password_update);
        this.msg = 'Password is changed successfully';
        this.password_update = new Password();
        alert(this.msg);
      },
      (error) => {
        console.log('Change password failed'), (this.msg = error.error);
        this.password_update = new Password();
      }
    );
  }
  Contact(){
    this.service.ContactService(this.contact).subscribe(
      (data) => {
        console.log(this.password_update);
        this.msg = 'Contact urls sended successfully';
        this.contact = new Contact();
        alert(this.msg);
      },
      (error) => {
        console.log('error,send contact urls failed'), (this.msg = error.error);
        this.contact = new Contact();
      }
    );
  }

  selectedFile: File | null = null;

      onFileSelected(event: any) {
        this.selectedFile = event.target.files[0];
      }
      uploadFile() {
        if (!this.selectedFile) {
          return;
        }
      
        this.service.uploadCV(this.selectedFile, this.id).subscribe(
          (response) => {
            console.log('File uploaded successfully:', response);
          },
          (error) => {
            console.error('File upload error:', error);
          }
        );
      }

      deleteCategory(id:number){

      }
      updateCategory(id:number){

      }
      
      


     

  

  }
