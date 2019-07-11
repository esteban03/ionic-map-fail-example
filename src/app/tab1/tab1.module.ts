import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDtB8uTnUZm9Riv43oNnlW3tx4hCNujeVU'
    }),
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
