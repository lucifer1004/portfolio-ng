import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.styl'],
})
export class BlogItemComponent implements OnInit {
  title: string

  constructor() {
    this.title = 'Hello'
  }

  ngOnInit() {}
}
