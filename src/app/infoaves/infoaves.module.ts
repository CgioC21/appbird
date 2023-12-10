import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoavesPageRoutingModule } from './infoaves-routing.module';

import { InfoavesPage } from './infoaves.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoavesPageRoutingModule
  ],
  declarations: [InfoavesPage]
})
export class InfoavesPageModule {}
