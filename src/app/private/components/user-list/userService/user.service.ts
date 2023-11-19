import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'interfaces/user';
import { Observable, mergeMap } from 'rxjs';
import { MemberService } from '../../services/member.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = '/api/arsii/';

  constructor(
    private httpClient: HttpClient,
    private memberService: MemberService
  ) {}

  getUserList(page: number, pageSize: number, filter: object): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    return this.httpClient.post(
      `${this.baseUrl}member/filter?page=${page - 1}&size=${pageSize}`,
      filter
    );
  }

  getUserById(id: any) {
    return this.httpClient.get(`${this.baseUrl}member/` + id);
  }

  addUser(userData: User): Observable<any> {
    if (userData.image) {
      return this.memberService.uploadImage(userData.image).pipe(
        mergeMap((result: any) => {
          const reqData = {
            ...userData,
            image: result.file,
          };
          return this.httpClient.post(`${this.baseUrl}auth/register`, reqData);
        })
      );
    } else {
      return this.httpClient.post(`${this.baseUrl}auth/register`, userData);
    }
  }

  updateUser(id: number, userData: User): Observable<any> {
    if (userData.image) {
      return this.memberService.uploadImage(userData.image).pipe(
        mergeMap((result: any) => {
          const reqData = {
            ...userData,
            image: result.file,
          };
          return this.httpClient.put(this.baseUrl + 'admin/' + id, reqData);
        })
      );
    } else {
      return this.httpClient.put(this.baseUrl + 'admin/' + id, userData);
    }
  }

  enableUser(id: number | undefined): Observable<any> {
    return this.httpClient.put(
      this.baseUrl + 'admin/enable/' + id,
      {},
      { responseType: 'text' }
    );
  }

  deleteUser(id: number | undefined): Observable<any> {
    return this.httpClient.delete(this.baseUrl + 'admin/' + id, {
      responseType: 'text',
    }); //`${this.baseUrl}admin/${id}`
  }
}
