import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  public list(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts');
  }

  public get(id: number): Observable<any> {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  public getComments(id: number): Observable<any[]> {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  }
}
