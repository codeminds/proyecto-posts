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
  public filteredPosts: Post[];
  public filter: string;

  constructor(
    private postsService: PostService,
    private router: Router
  ){
    this.posts = [];
    this.filteredPosts = [];
    this.filter = '';
  }

  public ngOnInit(): void {
    /* Esta suscripción es sobre el objeto HttpClient de Angular
    el cuál es un observable especial que se desuscribe al terminar
    la llamada HTTP, por ende no debemos preocuparnos por que la suscripción
    quede en memoria después de que el componente sea destruido */
    this.postsService.list().subscribe((data) => {
      this.posts = data;
      this.filteredPosts = data;
    });
  }

  public filterPosts(): void {
    this.filteredPosts = this.posts.filter((item) => item.title.includes(this.filter));
  }

  public goToPost(id: number): void {
    this.router.navigate(['post', id]);
  }
}
