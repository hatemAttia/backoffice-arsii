import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MemberService } from './member.service';
import { Observable, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClubService {
  constructor(private http: HttpClient, private memberService: MemberService) {}

  getClub(): Observable<any> {
    return this.http.get('api/arsii/member/club');
  }

  addClub(data: any) {
    if (data.logo) {
      return this.memberService.uploadImage(data.logo).pipe(
        mergeMap((result: any) => {
          const reqData = {
            ...data,
            logo: result.file,
          };
          return this.http.post(`api/arsii/admin/club`, reqData);
        })
      );
    } else {
      return this.http.post(`api/arsii/admin/club`, data);
    }
  }

  // public editPartenaire(data: any): Observable<any> {
  //   return this.http.put('api/arsii/admin/partner/' + data.id, data);
  // }

  editClub(data: any) {
    if (data.logo) {
      return this.memberService.uploadImage(data.logo).pipe(
        mergeMap((result: any) => {
          const reqData = {
            ...data,
            logo: result.file,
          };
          return this.http.put('api/arsii/admin/club/' + reqData.id, reqData);
        })
      );
    } else {
      return this.http.put('api/arsii/admin/club/' + data.id, data);
    }
  }

  public deleteClub(Id: number): Observable<any> {
    return this.http.delete<any>('api/arsii/admin/club/' + Id);
  }
}
