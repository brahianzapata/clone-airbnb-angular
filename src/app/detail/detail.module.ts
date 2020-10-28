import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './components/card/card.component';
import { RouterModule } from '@angular/router';
import { DetailRoutingModule } from './detail-routing.module';



@NgModule({
  declarations: [DetailComponent, CardComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    DetailRoutingModule
  ]
})
export class DetailModule { }
