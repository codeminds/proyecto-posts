import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsPage } from './pages/posts/posts.page';
import { PostPage } from './pages/post/post.page';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PostsPage,
    PostPage
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule
  ]
})
export class PostsModule { }
