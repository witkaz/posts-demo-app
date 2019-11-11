import { Component, OnInit } from '@angular/core';
import { PostsService } from './core/services/posts.service';
import { Post } from './shared/models/posts/posts.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts: Post[] = [];
  singlePost: Post;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPosts().subscribe({
      next: (posts) => this.posts = posts,
      error: () => alert('There are no posts to display')
    });
  }

  selectPost(post: Post): void {
    this.singlePost = post;
  }
}
