import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HijoComponent } from './hijo/hijo.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HijoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    HijoComponent
  ]
})
export class ComponentsModule { }
