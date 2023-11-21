import { Component, OnInit } from '@angular/core';
import { UserUpdate } from '../types/user-update';
import { Password } from '../types/password';
import { MemberService } from '../services/member.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Skill } from '../types/skill';
import { Contact } from '../types/contact';
import { MessageService } from 'primeng/api';
import { Cv } from '../types/cv';

@Component({
  selector: 'app-change-information',
  templateUrl: './change-information.component.html',
  styleUrls: ['./change-information.component.scss'],
})
export class ChangeInformationComponent implements OnInit {
  user_update = new UserUpdate();
  msg = '';
  skill = new Skill();
  selectedCategory = null;
  cv = new Cv();
  contact = new Contact();
  contactList: any = [];
  platformList = [
    'Email',
    'Linkedin',
    'GitHub',
    'WhatsApp',
    'Twitter',
    'Telegram',
    'Facebook',
    'Instagram',
  ];
  categories: any;
  skills: any;
  id!: number;
  password_update = {
    oldPassword: '',
    newPassword: '',
  };

  showOldPassword = false;
  showNewPassword = false;
  currentCv: any;

  toggleShowOldPassword() {
    this.showOldPassword = !this.showOldPassword;
  }

  toggleShowNewPassword() {
    this.showNewPassword = !this.showNewPassword;
  }

  showPassword = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  constructor(
    private service: MemberService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.displayCurrentUSer();
    this.service.getCategories().subscribe((res) => {
      this.categories = res;
    });
    this.getSkills();
  }

  getSkills() {
    this.service.getSkills().subscribe((res) => {
      this.skills = res;
      console.log(res);
    });
  }
  displayCurrentUSer() {
    this.service.getUserById().subscribe(
      (data) => {
        console.log(this.user_update);
        this.msg = 'Updated successfully';
        console.log(data);

        this.id = data.id;
        this.user_update.firstName = data.firstName;
        this.user_update.lastName = data.lastName;
        this.user_update.email = data.email;
        this.user_update.userName = data.userName;
        this.user_update.job = data.job;
        this.user_update.phoneNumber = data.phoneNumber;
        this.user_update.office = data.office;
        this.user_update.region = data.region;
        this.currentCv = data.cv;
        this.user_update.image = data.image;
        this.user_update.universityOrCompany = data.universityOrCompany;
        console.log(data.dateOfBirth);

        this.user_update.dateOfBirth = new Date(data.dateOfBirth);
        console.log(this.user_update.dateOfBirth);

        console.log(data);
        this.contactList = data.contacts;
      },
      (error) => {
        console.log('Update is failed'), (this.msg = error.error);
      }
    );
  }
  imageUrl: string = '11.png';

  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Extract the file name from the selected file
      const fileName = file.name;
      this.imageUrl = fileName;

      this.user_update.image = file;
      this.service.updateImageUser(this.user_update).subscribe(
        (response) => {
          this.displayCurrentUSer();
          this.selectedFile = null;
          this.messageService.add({
            severity: 'success',
            summary: 'User CV is Updated Successfully',
            detail: 'User CV is Updated Successfully !!!',
          });

          console.log('File uploaded successfully:', response);
        },
        (error) => {
          console.error('File upload error:', error);
          this.messageService.add({
            severity: 'error',
            summary: 'failed ! please check your cv format',
            detail: 'Please check your cv format !!!',
          });
        }
      );
    }
  }

  ChangeUser() {
    this.service.updateMember(this.user_update).subscribe(
      (data) => {
        console.log(data);
        this.msg = 'Updated successfully';
        this.messageService.add({
          severity: 'success',
          summary: 'User Updated Successfully',
          detail: 'User Updated Successfully !!!',
        });
      },
      (error) => {
        console.log('Update is failed', error), (this.msg = error.error);
        this.messageService.add({
          severity: 'error',
          summary: 'failed ! please check your information',
          detail: 'Please check your information !!!',
        });
      }
    );
  }

  ChangePassword() {
    this.service.PasswordService(this.password_update).subscribe(
      (data) => {
        console.log(this.password_update);
        this.msg = 'Password is changed successfully';
        this.messageService.add({
          severity: 'success',
          summary: 'Password is Updated Successfully',
          detail: 'Password is Updated Successfully !!!',
        });
      },
      (error) => {
        console.log('Change password failed'), (this.msg = error.error);
        this.password_update = new Password();
        this.messageService.add({
          severity: 'error',
          summary: 'failed ! please check your information',
          detail: 'Please check your password !!!',
        });
      }
    );
  }
  Contact() {
    this.service.ContactService({ ...this.contact, userId: this.id }).subscribe(
      (data) => {
        console.log(this.contact);
        this.msg = 'Contact urls sended successfully';
        this.messageService.add({
          severity: 'success',
          summary: 'User Contact is Updated Successfully',
          detail: 'User Contact is Updated Successfully !!!',
        });
        this.displayCurrentUSer();
      },
      (error) => {
        console.log('error,send contact urls failed'), (this.msg = error.error);
        this.contact = new Contact();
        this.messageService.add({
          severity: 'error',
          summary: 'failed ! please check your information',
          detail: 'Please check your information !!!',
        });
      }
    );
  }
  deleteContact(id: any) {
    this.service.deleteContact(id).subscribe((res) => {
      this.displayCurrentUSer();
      this.messageService.add({
        severity: 'success',
        summary: 'User Contact is Deleted Successfully',
        detail: 'User Contact is Deleted Successfully !!!',
      });
    });
  }

  selectedFile: File | null = null;
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  uploadFile() {
    if (!this.selectedFile) {
      return;
    }
    this.user_update.cv = this.selectedFile;
    this.service
      .updateUserCV({
        ...this.user_update,
        file: this.selectedFile,
      })
      .subscribe(
        (response) => {
          this.displayCurrentUSer();
          this.selectedFile = null;
          this.messageService.add({
            severity: 'success',
            summary: 'User CV is Updated Successfully',
            detail: 'User CV is Updated Successfully !!!',
          });

          console.log('File uploaded successfully:', response);
        },
        (error) => {
          console.error('File upload error:', error);
          this.messageService.add({
            severity: 'error',
            summary: 'failed ! please check your cv format',
            detail: 'Please check your cv format !!!',
          });
        }
      );
  }

  deleteCategory(CategoryId: number) {
    this.service.deleteCategory(CategoryId).subscribe(
      (data) => {
        console.log(data);
        this.categories = this.service.getCategories();
      },
      (error) => console.log(error)
    );
  }
  getRelatedSkiills(id: number) {}

  openPdf(cv: any) {
    window.open('/api/arsii/file/PDF/' + cv, '_blank');
  }

  addSkill(skill: any) {
    this.service
      .addSkills({
        competenceId: skill.id,
        level: 'Beginner',
      })
      .subscribe((res) => {
        this.getSkills();

        console.log(res);
      });
  }

  deleteSkill(skill: any) {
    const userSkill = this.skills.find(
      (el: any) => el.competence.id == skill.id
    );
    this.service.deleteUserSkill(userSkill.id).subscribe((res) => {
      this.getSkills();

      console.log(res);
    });
  }

  includeSkill(skill: any) {
    return !!this.skills.find((el: any) => el.competence.id == skill.id);
  }
}
