import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.styl'],
})
export class BlogItemComponent implements OnInit {
  @Input() title: string

  constructor() {}

  ngOnInit() {}
}
