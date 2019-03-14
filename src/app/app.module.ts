import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterService } from './master.service';
import { SampleService } from './sample.service';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SampleDirective,
    SamplePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MasterService, SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
