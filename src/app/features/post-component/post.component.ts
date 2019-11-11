import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostsService } from 'src/app/core/services/posts.service';
import { Post } from 'src/app/shared/models/posts/posts.model';

@Component({
  selector: 'app-post-component',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Output() selected = new EventEmitter<Post>();
  @Input() posts: Post;
  selectedPost: Post;

  constructor(private postsService: PostsService) {}

  public select(): void {
    this.selected.emit(this.posts);
    this.selectedPost = this.posts;
    console.log(this.posts);
    console.log('selected');
  }
}
