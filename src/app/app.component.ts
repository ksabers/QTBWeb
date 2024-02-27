import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'QTBWeb';
  constructor(public translate: TranslateService) {
    translate.addLangs(['en-US', 'it-IT']);
    translate.setDefaultLang('it-IT');
    translate.use('it-IT');
  }
}