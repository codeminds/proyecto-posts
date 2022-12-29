import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  constructor(private http: HttpClient) { }

  public list(): Observable<any[]> {
    return this.http.get<any[]>('https://picsum.photos/v2/list');
  }
}
