import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {BlogItemComponent} from '../blog-item/blog-item.component'
import {BlogListComponent} from './blog-list.component'

describe('BlogListComponent', () => {
  let component: BlogListComponent
  let fixture: ComponentFixture<BlogListComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlogItemComponent, BlogListComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
