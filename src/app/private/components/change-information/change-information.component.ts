import { Component, OnInit } from '@angular/core';
import { UserUpdate } from '../types/user-update';
import { Password } from '../types/password';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-change-information',
  templateUrl: './change-information.component.html',
  styleUrls: ['./change-information.component.scss'],
})
export class ChangeInformationComponent implements OnInit {
  user_update = new UserUpdate();
  password_update = new Password();
  msg = '';

  constructor(
    private service: UserService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  ChangeUser() {
    this.service.InformationService(this.user_update).subscribe(
      (data) => {
        console.log(this.user_update);
        this.msg = 'Registration successfully';
        this.user_update = new UserUpdate();
        alert(this.msg);
        this.router.navigate(['/auth/signin']);
      },
      (error) => {
        console.log('Registration failed'), (this.msg = error.error);
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

  selectedFile: File | null = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (!this.selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('cv', this.selectedFile);

    // Replace 'your-upload-api-url' with the actual URL to your server-side API
    this.http.post('http://localhost/api/cv', formData).subscribe(
      (response) => {
        console.log('File uploaded successfully:', response);
        // Handle success, e.g., display a success message to the user
      },
      (error) => {
        console.error('File upload error:', error);
        // Handle error, e.g., display an error message to the user
      }
    );
  }

  // EmailNotification() {
  //   this.service.EmailService(this.email).subscribe(
  //     (data) => {
  //       console.log(this.password_update);
  //       this.msg = 'Email sended';
  //       this.email = new Email();
  //       alert(this.msg);
  //     },
  //     (error) => {
  //       console.log('Eroor'), (this.msg = error.error);
  //       this.email = new Email();
  //     }
  //   );
  // }

  // ContactForm() {
  //   this.service.ContactService(this.contact).subscribe(
  //     (data) => {
  //       console.log(this.user_update);
  //       this.msg = 'Message send';
  //       this.contact = new Contact();
  //       alert(this.msg);
  //     },
  //     (error) => {
  //       this.msg = error.error;
  //       this.contact = new Contact();
  //     }
  //   );
  // }
}
