import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '@models/post';
import { PostService } from '@services/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.css']
})
export class PostsPage implements OnInit {
  public posts: Post[];

  constructor(
    private postService: PostService,
    private router: Router
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

  public goToPost(id: number) {
    this.router.navigate([id]);
  }
}
