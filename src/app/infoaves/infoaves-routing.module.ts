import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoavesPage } from './infoaves.page';

const routes: Routes = [
  {
    path: '',
    component: InfoavesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoavesPageRoutingModule {}
