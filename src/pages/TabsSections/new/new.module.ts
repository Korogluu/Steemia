import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewPage } from './new';
import { ComponentsModule } from '../../../components/components.module';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    NewPage,
  ],
  imports: [
    ComponentsModule,
    IonicImageLoader,
    IonicPageModule.forChild(NewPage),
  ],
})
export class NewPageModule {}
