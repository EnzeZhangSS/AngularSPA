import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateMovieComponent } from './create-movie.component';
import { CreateCastComponent } from './create-cast.component';
import { TopPurchasesComponent } from './top-purchases.component';
import { AdminGuard } from '../core/Guards/admin.guard';


@NgModule({
  declarations: [
    CreateMovieComponent,
    CreateCastComponent,
    TopPurchasesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [ AdminGuard ]
})
export class AdminModule { }