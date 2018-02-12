import { Component } from '@angular/core';
import { IonicPage, App } from 'ionic-angular';
import { Post } from 'models/models';
import { SteemProvider } from '../../../providers/steem/steem';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from "rxjs/Subscription";
import { trendsTemplate } from './trend.template';

@IonicPage({
  priority: 'high'
})
@Component({
  selector: 'tab-sections',
  template: trendsTemplate
})
export class TrendPage{

  private destroyed$: Subject<{}> = new Subject();
  private contents: Array<Post> = [];
  private is_first_loaded: boolean = false;
  private subscription: ISubscription;
  
  constructor(public appCtrl: App,
              private steemProvider: SteemProvider) {

    

  }

  ionViewDidLoad() {
    this.dispatchTrending();
  }

  ionViewDidLeave() {
    this.destroyed$.next(); /* Emit a notification on the subject. */
    this.destroyed$.complete();
    this.subscription.unsubscribe();
  }

  /**
   * Method to dispatch feed and avoid repetition of code
   */
  private dispatchTrending() {
    this.subscription = this.getTrending()
    .takeUntil( this.destroyed$ )
    .subscribe((data: Array<Post>) => {
      data.map(post => {
        this.contents.push(post);
      });
    });
    // Check if it is false to avoid assigning the variable in each iteration
    if (this.is_first_loaded == false) {
      this.is_first_loaded = true;
    }
    
  }

  /**
   * 
   * Method to get posts filtered by trending
   * 
   * @returns Observable with an array of posts
   * @author Jayser Mendez.
   */
  private getTrending(): Observable<Array<Post>> {
    let query;

    if (!this.is_first_loaded) {
      query = {
        limit: 25,
        tag: 'steem'
      };  
    }
    
    else {
      query = {
        tag: 'steem',
        limit: 25,
        start_author: this.contents[this.contents.length - 1].author,
        start_permlink: this.contents[this.contents.length - 1].permlink,
      };
    }

    return this.steemProvider.getByTrending(query)
  }

  /**
   * 
   * Method to refresh the current post for future data.
   * 
   * @param {Event} refresher
   */
  private doRefresh(refresher): void {
    this.subscription.unsubscribe();
    this.is_first_loaded = false;
    this.subscription = this.getTrending()
    .takeUntil( this.destroyed$ )
    .subscribe((data: Array<Post>) => {
      this.contents = [];
      data.map(post => {
        this.contents.push(post);
      });
      this.is_first_loaded = true;
      refresher.complete();
    });
  }

  /**
   * 
   * Method to load data while scrolling.
   * 
   * @param {Event} infiniteScroll
   */
  private doInfinite(infiniteScroll): void {
    this.subscription.unsubscribe();
    this.subscription = this.getTrending()
    .takeUntil( this.destroyed$ )
    .subscribe((data: Array<Post>) => {
      data.slice(1).map(post => {
        this.contents.push(post);
      });
      infiniteScroll.complete();
    });
  }

  /**
   * @method openPage: Method to push a page to the nav controller
   * @param {string} str: the name of the page to push
   */
  private openPage(str: string): void {
    this.appCtrl.getRootNavs()[0].push(str);
  }

  public identify(index, item) {
    return item.title;
  }
}
