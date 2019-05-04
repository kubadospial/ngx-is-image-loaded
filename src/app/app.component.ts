import { Component } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('imageEnter', [
      state('loaded', style({
        height: '*'
      })),
      state('notLoaded', style({
        height: '0px'
      })),
      transition('notLoaded => loaded', [
        animate('1s')
      ])
    ])
  ]
})
export class AppComponent {
  isImageLoaded = false;

  onImageLoaded(isLoaded: boolean) {
    this.isImageLoaded = isLoaded;
  }
}
