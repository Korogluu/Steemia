import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotPage } from './hot';
import { ComponentsModule } from '../../../components/components.module';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    HotPage,
  ],
  imports: [
    ComponentsModule,
    IonicImageLoader,
    IonicPageModule.forChild(HotPage),
  ],
})
export class HotPageModule {}
