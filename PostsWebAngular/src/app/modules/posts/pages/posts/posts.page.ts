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
    this.postService.list().subscribe((posts) => {
      this.posts = posts;
    })
  }
}
