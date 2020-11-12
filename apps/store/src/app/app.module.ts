import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { StoreUiSharedModule } from '@bg-hoard/store/ui-shared';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatCardModule,
    StoreUiSharedModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
