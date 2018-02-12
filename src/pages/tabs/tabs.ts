import { Component } from '@angular/core';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
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
