import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { NgmaterialModule } from '../shared/ngmaterial.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, RouterModule,
    DashboardRoutingModule,
    NgmaterialModule,
    SharedModule
  ]
})
export class DashboardModule { }
