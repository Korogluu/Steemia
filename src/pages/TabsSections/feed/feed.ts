import { Component } from '@angular/core';
import { IonicPage, App } from 'ionic-angular';
import { Post } from 'models/models';
import { SteemProvider } from '../../../providers/steem/steem';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { Observable } from 'rxjs/Observable';
import { SteemConnectProvider } from 'providers/steemconnect/steemconnect';

@IonicPage({
  priority: 'high'
})
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {

  private destroyed$: Subject<{}> = new Subject();
  private contents: Array<Post> = [];
  private username: string = 'steemit';
  private is_first_loaded: boolean = false;

  constructor(private steemProvider: SteemProvider,
              private appCtrl: App,
              private steemConnect: SteemConnectProvider) {

    /**
     * Subscribe to the user object in the auth provider
     */
    this.steemConnect.username.subscribe(user => {
      if (user !== null) {
        // Redeclare it as false to start the pagination from 0
        this.is_first_loaded = false;
        this.username = user;
        this.dispatchFeed();
      }
    })

  }

  ionViewDidLoad() {
    this.dispatchFeed();
  }

  ionViewDidLeave() {
    this.destroyed$.next(); /* Emit a notification on the subject. */
    this.destroyed$.complete();
  }

  /**
   * Method to dispatch feed and avoid repetition of code
   */
  private dispatchFeed() {
    this.getFeed()
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
   * Method to get posts in the user feed
   * 
   * @returns Observable with an array of posts
   * @author Jayser Mendez.
   */
  private getFeed(): Observable<Array<Post>> {

    let query;

    if (!this.is_first_loaded) {
      query = {
        limit: 10,
        tag: this.username
      };  
    }
    
    else {
      query = {
        tag: this.username,
        limit: 10,
        start_author: this.contents[this.contents.length - 1].author,
        start_permlink: this.contents[this.contents.length - 1].permlink,
      };
    }

    return this.steemProvider.getFeed(query);
  }

  /**
   * 
   * Method to refresh the current post for future data.
   * 
   * @param {Event} refresher
   */
  private doRefresh(refresher): void {
    this.is_first_loaded = false;
    this.getFeed()
    .takeUntil( this.destroyed$ )
    .subscribe((data: Array<Post>) => {
      this.contents = [];
      data.map(post => {
        this.contents.push(post);
      });
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
    this.getFeed()
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
}
