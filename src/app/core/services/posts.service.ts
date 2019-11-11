import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostsParams, Post } from 'src/app/shared/models/posts/posts.model';
import { map } from 'rxjs/operators';

@Injectable()
export class PostsService {
    private readonly postsApi: string = 'http://localhost:9020';
    private readonly postsList: string = 'posts';

    constructor(private http: HttpClient) {}

    getPosts(): Observable<Post[]> {
      return this.http.get<PostsParams[]>(`${this.postsApi}/posts`).pipe(
        map((data) => data.map((postAttrs) => new Post(postAttrs)))
      );
    }

    // getPost(id: number): Observable<Post> {
    //     return this.http.get<Post>(`${this.postsApi}/${this.postsList}/${id}`);
    // }
    public getJSON(): Observable<any> {
        return this.http.get('api/db.json');
    }
}
