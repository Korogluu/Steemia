import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedPage } from './feed';
import { ComponentsModule } from '../../../components/components.module';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    FeedPage,
  ],
  imports: [
    ComponentsModule,
    IonicImageLoader,
    IonicPageModule.forChild(FeedPage),
  ],
})
export class FeedPageModule {}
