import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MyComponent } from './app.component';

@NgModule({
  declarations: [
    MyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [MyComponent]
})
export class AppModule { }
