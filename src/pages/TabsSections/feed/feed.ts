import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IonicPage, App } from 'ionic-angular';
import { Post } from 'models/models';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import * as fromPostsActions from '../../../app/actions/posts';
import { State } from '../../../app/reducers';

@IonicPage()
@Component({
  selector: 'page-feed',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'feed.html'
})
export class FeedPage implements OnInit {

  private perPage = 10;

  private feedPosts$: Observable<any>;
  private isLoading$: Observable<boolean>;

  constructor(private appCtrl: App,
              private _store: Store<State>) {}


  public ngOnInit() {
    this.feedPosts$ = this._store.select(state => state.posts.data);
    this.isLoading$ = this._store.select(state => state.posts.isLoading);
    this._store.dispatch(new fromPostsActions.fetchFeed({tag:"jaysermendez", limit: this.perPage}));
  }

  /**
   * 
   * Method to refresh the current post for future data.
   * 
   * @param {Event} refresher
   */
  private doRefresh(refresher): void {
    this.perPage = 10
    this._store.dispatch(new fromPostsActions.fetchFeed({tag:"jaysermendez", limit: this.perPage}));
    this.isLoading$.subscribe(loading => {
      if (loading) null // Sleep while it is loading :D
      else refresher.complete();
    });
  }

  /**
   * 
   * Method to load data while scrolling.
   * 
   * @param {Event} infiniteScroll
   */
  private doInfinite(infiniteScroll): void {
    this.perPage += 10
    this._store.dispatch(new fromPostsActions.fetchFeed({tag:"jaysermendez", limit: this.perPage}));
    this.isLoading$.subscribe(loading => {
      if (loading) null // Sleep while it is loading :D
      else infiniteScroll.complete();
      
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
