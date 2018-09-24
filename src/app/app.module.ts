import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveComponent } from './features/reactive/reactive.component';
import { TemplateComponent } from './features/template/template.component';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
