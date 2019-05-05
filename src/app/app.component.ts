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

  url1 = 'https://images.pexels.com/photos/1575/city-man-person-lights.jpg?' + this.getRandomNumber;
  url2 = 'https://images.pexels.com/photos/1575/city-man-person-lights.jpg?' + this.getRandomNumber;

  onImageLoaded(isLoaded: boolean) {
    this.isImageLoaded = isLoaded;
  }

  get getRandomNumber() {
    return Math.round(Math.random() * 10000);
  }

}
