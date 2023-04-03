import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { CreateComponent } from './component/create/create.component';
import { ViewComponent } from './component/view/view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { businessReducer } from './store/contact.reducer';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, HomeComponent, CreateComponent, ViewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPopoverModule,
    StoreModule.forRoot({ business: businessReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
