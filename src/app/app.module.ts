import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WgNgLibraryModule} from 'wg-ng-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WgNgLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
