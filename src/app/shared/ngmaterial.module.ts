import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';

const material = [
  
  MatDatepickerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatProgressBarModule,
  MatExpansionModule,
  MatRadioModule,
  MatCheckboxModule,
  DragDropModule,
  LayoutModule,
  MatTabsModule,
  MatDividerModule,
  MatMenuModule
];


@NgModule({
  imports: [material],
  exports: [material]
})

export class NgmaterialModule { }
