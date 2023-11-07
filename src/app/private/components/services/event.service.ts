import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from 'interfaces/event';
import { Observable, mergeMap } from 'rxjs';
import { MemberService } from './member.service';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(
    private httpClient: HttpClient,
    private membreService: MemberService
  ) {}

  private baseUrl = '/api/arsii/';

  // addEvent(eventData: Event): Observable<any> {
  //   return this.httpClient.post(`${this.baseUrl}admin/event`, eventData);
  // }

  getAllEvents(type: string | null): Observable<any> {
    let params = new HttpParams();
    if (type) params = params.set('type', type.toString());
    return this.httpClient.get(`${this.baseUrl}member/event`, { params });
  }

  getMyEvents(id: string | null): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}member/userEvent/events/` + id);
  }

  getEventById(eventId: Number): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'admin/event/' + eventId);
  }

  updateEvent(eventId: number, updatedEvent: Event): Observable<any> {
    return this.httpClient.put(
      this.baseUrl + 'admin/event/' + eventId,
      updatedEvent,
      { responseType: 'text' }
    );
  }

  deleteEvent(id: number | undefined): Observable<any> {
    return this.httpClient.delete(this.baseUrl + 'admin/event/' + id, {
      responseType: 'text',
    }); //`${this.baseUrl}admin/${id}`
  }

  addEvent(data: any) {
    return this.membreService.uploadImage(data.image).pipe(
      mergeMap((result: any) => {
        const reqData = {
          ...data,
          image: result.file,
        };
        return this.httpClient.post(`${this.baseUrl}admin/event`, reqData);
      })
    );
  }

  reservationEvent(data: any) {
    return this.httpClient.post(`${this.baseUrl}/member/userEvent`, data);
  }

  updateEventImg(id: number, data: Event) {
    if (data.image) {
      return this.membreService.uploadImage(data.image).pipe(
        mergeMap((result: any) => {
          const reqData = {
            ...data,
            image: result.file,
          };
          return this.httpClient.put(
            `${this.baseUrl}admin/event/` + id,
            reqData
          );
        })
      );
    } else {
      return this.httpClient.put(`${this.baseUrl}admin/event/` + id, data);
    }
  }
}
