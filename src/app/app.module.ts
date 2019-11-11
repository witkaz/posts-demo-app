import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './features/post-component/post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from './core/services/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
