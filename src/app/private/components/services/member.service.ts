import { Contact } from '../types/contact';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserUpdate } from '../types/user-update';
import { Password } from '../types/password';
import { Skill } from '../types/skill';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  constructor(private http: HttpClient) {}

  public uploadImage(data:FormData,id:number){
    return this.http.post<any>('api/arsii/membre/password'+data,id);

  }
  
  public updateMember(user:UserUpdate): Observable<any> {
    return this.http.put<any>('api/arsii/auth/member',user);
  }
  public PasswordService(password: Password): Observable<any> {
    return this.http.put<any>('api/arsii/member/password', password);
  }
  public ContactService(contact: Contact): Observable<any> {
    return this.http.post<any>('api/arsii/member/contact', contact);
  }
  public getUserById(): Observable<any> {
    return this.http.get<any>('api/arsii/member/me');
  }
    public getMe(): Observable<any> {
      return this.http.get<any>('api/arsii/member/me');
  }
  public uploadCV(file: File, userId: number): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
  
    return this.http.post<any>(`api/arsii/membre/uploadCV/${userId}`, formData);
  }
  

  public getCategories():Observable<any>{
    return 	this.http.get('api/arsii/admin/category' );
  }
  public getSkills():Observable<any>{
    return 	this.http.get('api/arsii/member/admin/competence' );
  }
  public addSkills(comp:Skill):Observable<any>{
    return 	this.http.post('api/arsii/member/usercompetences',comp );
  }
}
