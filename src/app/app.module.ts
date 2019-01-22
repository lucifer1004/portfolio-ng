import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {BlogComponent} from './blog/blog.component'
import {BlogItemComponent} from './blog-item/blog-item.component'

@NgModule({
  declarations: [AppComponent, BlogComponent, BlogItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
