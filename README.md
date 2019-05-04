# NgxIsImageLoaded

If You are looking for simple Angular 6+ directive that tells if an image is loaded. This is the place!

## Note
```
Directive requires Rxjs version >= 6.0.0.
```

## Demo
Check the [link](https://kubadospial.github.io/ngx-is-image-loaded/)

## Usage

Install ngx-positioner
- npm: ``` $ npm install ngx-is-image-loaded ``` 
- yarn: ``` $ yarn add ngx-is-image-loaded ``` 

import NgxIsImageLoadedModule

```js
import { NgxIsImageLoadedModule } from 'ngx-is-image-loaded';

@NgModule({
  declarations: [SomeComponent, ...],
  imports: [
    ...
    NgxIsImageLoadedModule
  ],
  providers: []
})
```

Use NgxIsImageLoadedDirective
```js
@Component(...)
export class SomeComponent {
  ...
  isImgLoaded = false;
  
  url = 'https://123.com/image.jpg';
  // or
  // url = ['https://123.com/image.jpg','https://123.com/image.jpg','https://123.com/image.jpg'];

  onImageLoaded(isLoaded: boolean) {
    this.isImageLoaded = isLoaded;
  }

```
And
```html
<div class="container"
       ngxIsImageLoaded
       (isImageLoaded)="onImageLoaded($event)"
       [url]="url">
    <img alt="image"
         src="https://123.com/image.jpg"
         *ngIf="isImgLoaded">
  </div>
```

## Directive
### Inputs:
url: string | Array<string>;

```
url: can take string or array of strings with urls;
```

### Outputs:
isImageLoaded: boolean;
```
isImageLoaded: EventEmitter that emits boolean is url or array of urls is loaded;
```

## Contributing
1. Fork repo.
2. `npm install / yarn`.
3. Make your changes.
4. Add your tests.
5. `npm run test / yarn start test`.
6. `npm run build / yarn start build`.
7. After all tests are passing. 
8. Commit, push, PR.

## License
Released under the terms of MIT License.
