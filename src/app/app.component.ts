import {Component} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
})
export class AppComponent {
  title = 'portfolio-ng'
  addArticle(title: HTMLInputElement, content: HTMLInputElement): boolean {
    console.log(
      `Adding post title: ${title.value} and content: ${content.value}`,
    )
    return false
  }
}
