import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.styl'],
})
export class BlogListComponent implements OnInit {
  blogs: string[]

  constructor() {
    this.blogs = ['One', 'Two', 'Three']
  }

  ngOnInit() {}
}
