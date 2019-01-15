import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PropertyComponent } from './property/property.component';
import { PropertyService } from './services/propertyService.service';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { FilterPipe } from './property/propertyFilter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent,
    HomeComponent,
    FormsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'property', component: PropertyComponent},
      {path: 'form', component: FormsComponent},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'property', pathMatch: 'full'}
  ]),
  ],
  providers: [PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
