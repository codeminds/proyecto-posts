import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from '@models/comment';
import { Post } from '@models/post';
import { CommentService } from '@services/comment/comment.service';
import { PostService } from '@services/post/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.css']
})
export class PostPage implements OnInit, OnDestroy {
  public post: Post;
  public comments: Comment[];

  private subscriptions: Subscription;

  constructor(
    private postService: PostService,
    private commentService: CommentService,
    private route: ActivatedRoute,
    private router: Router
  ){
    this.post = null;
    this.comments = [];

    this.subscriptions = new Subscription();
  }

  public ngOnInit(): void {
    this.subscriptions.add(this.route.params.subscribe((params) => {
      this.postService.get(params.id).subscribe((data) => {
        this.post = data;
      });

      this.commentService.list(params.id).subscribe((data) => {
        this.comments = data;
      });
    }));
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public goBack(): void {
    this.router.navigate(['']);
  }
}
