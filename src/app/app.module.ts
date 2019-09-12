import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CounterListComponent } from './counter-list/counter-list.component';
import { CounterDetailComponent } from './counter-detail/counter-detail.component';
import { SuperCounterComponent } from './super-counter/super-counter.component';
import { SuperDuperCounterComponent } from './super-duper-counter/super-duper-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterListComponent,
    CounterDetailComponent,
    SuperCounterComponent,
    SuperDuperCounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, CounterDetailComponent, SuperCounterComponent]
})
export class AppModule { }
