import { Component } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('imageEnter', [
      state('open', style({
        height: '200px'
      })),
      state('closed', style({
        height: '100px'
      })),
      transition('open => closed', [
        animate('3s'),
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
