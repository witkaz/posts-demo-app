export interface PostsParams {
  id: number;
  title: string;
  author: string;
  content: string;
}

export class Post {
  id: number;
  title: string;
  author: string;
  content: string;

  constructor(params: Partial<Post> = {}) {
    this.id = params.id;
    this.title = params.title;
    this.author = params.author;
    this.content = params.content;
  }
}
