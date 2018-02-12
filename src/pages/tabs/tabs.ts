import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs>
      <ion-tab [root]="feedRoot" tabIcon="list"></ion-tab>
      <ion-tab [root]="trendRoot" tabIcon="pulse"></ion-tab>
      <ion-tab [root]="hotRoot" tabIcon="flame"></ion-tab>
      <ion-tab [root]="newRoot" tabIcon="flash"></ion-tab>
      <ion-tab [root]="promotedRoot" tabIcon="pricetag"></ion-tab>
    </ion-tabs>
  `
})
export class TabsPage {

  private feedRoot: string = 'FeedPage';
  private trendRoot: string = 'TrendPage';
  private promotedRoot: string = 'PromotedPage';
  private hotRoot: string = 'HotPage';
  private newRoot: string = 'NewPage';

  constructor() {
    
  }

}
