import 'rxjs';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { SteemProvider } from 'providers/steem/steem'
import {
    FETCH_RANDOM_DOG,
    FETCH_FEED,
    fetchFeedSuccess,
    fetchFeedError
} from '../actions/posts';
import { fetchFeed } from '../actions/posts'

@Injectable()
export class PostEffects {
    // Inject required services
    limit: number = 0;
    constructor(private actions$: Actions, private _dogApiService: SteemProvider) { }

    /*
     * The return action is automatically dispatch to the store by ngrx/effects
     */
    @Effect()
    fetchFeed$: Observable<Action> = this.actions$
        // Send the request when FETCH_RANDOM_DOG is dispatched
        .ofType(FETCH_FEED)
        .map((action: fetchFeed) => action.payload)
        // Send the request to the API
        .switchMap((action) => {
            this.limit += 10;
            return this._dogApiService.getFeed({tag: action.tag, limit: action.limit})
                // Request succeeed, we dispatch fetchFeedSuccess action with the retrieved imgUrl
                .map(imgUrl => new fetchFeedSuccess(imgUrl))
                // Something went wrong with the request
                .catch(err => Observable.of(new fetchFeedError(err)))
        });
}