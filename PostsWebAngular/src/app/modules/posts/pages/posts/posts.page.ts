import { Component, OnInit } from '@angular/core';
import { PostService } from '@services/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.css']
})
export class PostsPage implements OnInit {
  public posts: any[];

  constructor(
    private postService: PostService
  ) { }

  public ngOnInit(): void {
    /* Esta suscripción es sobre el objeto HttpClient de Angular
    el cuál es un observable especial que se desuscribe al terminar
    la llamada HTTP, por ende no debemos preocuparnos por que la suscripción
    quede en memoria después de que el componente sea destruido */
    this.postService.list().subscribe((posts) => {
      this.posts = posts;
    })
  }
}
