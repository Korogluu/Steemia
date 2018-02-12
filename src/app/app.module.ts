import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http'
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { MyApp } from './app.component';
import { DataProvider } from 'providers/data/data';
import { SteemConnectProvider } from 'providers/steemconnect/steemconnect';
import { IonicStorageModule } from '@ionic/storage';
import { MaterialMenuComponent } from '../components/material-menu/material-menu';
import { SteemProvider } from 'providers/steem/steem';
import { HttpClientModule } from '@angular/common/http';
import { SteemiaProvider } from '../providers/steemia/steemia';
import { IonicImageLoader } from 'ionic-image-loader';

import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MaterialMenuComponent,
    MyApp,
    TabsPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'top',
      preloadModules: true
    }),
    IonicStorageModule.forRoot(),
    IonicImageLoader.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    InAppBrowser,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    SteemConnectProvider,
    SteemProvider,
    SteemiaProvider,
  ]
})
export class AppModule {}
