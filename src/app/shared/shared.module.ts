import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from '../components/comopent.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

const deps = [
  CommonModule,
  ComponentModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  FlexLayoutModule
]

@NgModule({
  declarations: [],
  imports: [deps],
  exports: [deps]
})
export class SharedModule { }
