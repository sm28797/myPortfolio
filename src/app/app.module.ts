import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ArComponent } from './ar/ar.component';
import { ContactComponent } from './contact/contact.component';
import { DevopsComponent } from './devops/devops.component';
import { ServicesComponent } from './services/services.component';
import { UiComponent } from './ui/ui.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ArComponent,
    ContactComponent,
    DevopsComponent,
    ServicesComponent,
    UiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
