import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslatePipe, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  translate = inject(TranslateService);

  name = "Szánt Ernő"

  ngOnInit() {
    this.translate.addLangs(['en', 'hu', 'de', 'jp']);
    this.translate.use('hu');
  }

  switchLanguage(event: Event) {
    this.translate.use((event.target as HTMLSelectElement).value)
  }
}
