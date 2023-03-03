import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http: HttpClient
  ) { }

  public list(postId: number): Observable<any[]> {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
