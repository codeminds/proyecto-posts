import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  public list(): Observable<any[]>{
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts', {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  public get(id: number): Observable<any> {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
