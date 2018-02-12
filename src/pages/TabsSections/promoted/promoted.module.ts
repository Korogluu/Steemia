import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PromotedPage } from './promoted';
import { ComponentsModule } from '../../../components/components.module';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    PromotedPage,
  ],
  imports: [
    ComponentsModule,
    IonicImageLoader,
    IonicPageModule.forChild(PromotedPage),
  ],
})
export class PromotedPageModule {}
