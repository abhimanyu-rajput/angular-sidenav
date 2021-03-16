import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { TopnavComponent } from './topnav/topnav.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';


const comps = [TopnavComponent,SidenavComponent,FooterComponent]

@NgModule({
  declarations: [comps],
  imports: [
    CommonModule,RouterModule, MatToolbarModule,MatIconModule
  ],
  exports: [comps]
})
export class ComponentModule { }
