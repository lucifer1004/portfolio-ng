import {TestBed, async} from '@angular/core/testing'
import {RouterTestingModule} from '@angular/router/testing'
import {AppComponent} from './app.component'
import {BlogComponent} from './blog/blog.component'
import {BlogItemComponent} from './blog-item/blog-item.component'
import {BlogListComponent} from './blog-list/blog-list.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        BlogComponent,
        BlogItemComponent,
        BlogListComponent,
      ],
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have as title 'portfolio-ng'`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app.title).toEqual('portfolio-ng')
  })

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to portfolio-ng!',
    )
  })
})
