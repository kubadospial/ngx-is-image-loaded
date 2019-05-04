import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxIsImageLoadedModule } from 'projects/ngx-is-image-loaded';

import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    NgxIsImageLoadedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
