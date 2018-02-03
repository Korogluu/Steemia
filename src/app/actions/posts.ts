import { Action } from '@ngrx/store';

/* 
 * Every Action has a type
 * It's a good practice to keep type constant
 * We re using one constant for each actions type
 * These types will be later used in reducers to match an action and its handlers
 */

 // General Data
export const FETCH_FEED = 'FETCH_FEED';
export const FETCH_FEED_SUCCESS = 'FETCH_FEED_SUCCESS';
export const FETCH_FEED_ERROR = 'FETCH_FEED_ERROR';

export const FETCH_TRENDING = 'FETCH_TRENDING';
export const FETCH_TRENDING_SUCCESS = 'FETCH_TRENDING_SUCCESS';
export const FETCH_TRENDING_ERROR = 'FETCH_TRENDING_ERROR';

export const FETCH_HOT = 'FETCH_HOT';
export const FETCH_HOT_SUCCESS = 'FETCH_HOT_SUCCESS';
export const FETCH_HOT_ERROR = 'FETCH_HOT_ERROR';

export const FETCH_CREATED = 'FETCH_CREATED';
export const FETCH_CREATED_SUCCESS = 'FETCH_CREATED_SUCCESS';
export const FETCH_CREATED_ERROR = 'FETCH_CREATED_ERROR';

export const FETCH_PROMOTED = 'FETCH_PROMOTED';
export const FETCH_PROMOTED_SUCCESS = 'FETCH_PROMOTED_SUCCESS';
export const FETCH_PROMOTED_ERROR = 'FETCH_PROMOTED_ERROR';

// Filtering
export const FETCH_BY_VOTES = 'FETCH_BY_VOTES';
export const FETCH_BY_VOTE_SUCCESS = 'FETCH_BY_VOTE_SUCCESS';
export const FETCH_BY_VOTE_ERROR = 'FETCH_BY_VOTE_ERROR';

export const FETCH_BY_PAYOUT = 'FETCH_BY_PAYOUT';
export const FETCH_BY_PAYOUT_SUCCESS = 'FETCH_BY_PAYOUT_SUCCESS';
export const FETCH_BY_PAYOUT_ERROR = 'FETCH_BY_PAYOUT_ERROR';

export const FETCH_BY_ACTIVE = 'FETCH_BY_ACTIVE';
export const FETCH_BY_ACTIVE_SUCCESS = 'FETCH_BY_ACTIVE_SUCCESS';
export const FETCH_BY_ACTIVE_ERROR = 'FETCH_BY_ACTIVE_ERROR';

export const FETCH_BY_CASHOUT = 'FETCH_BY_CASHOUT';
export const FETCH_BY_CASHOUT_SUCCESS = 'FETCH_BY_CASHOUT_SUCCESS';
export const FETCH_BY_CASHOUT_ERROR = 'FETCH_BY_CASHOUT_ERROR';

// Mock
export const FETCH_RANDOM_DOG = "FETCH_RANDOM_DOG";
export const FETCH_RANDOM_DOG_SUCCESS = "FETCH_RANDOM_DOG_SUCCESS";
export const FETCH_RANDOM_DOG_ERROR = "FETCH_RANDOM_DOG_ERROR";

/*
 * Every actions are basically data type with 2 properties : 
 * - type : This is the type of the action ( see above )
 * - payload : It can be anything, payload are parameters to pass with action to reducers
 * We're using class here in order for typescript to be more efficient ( for typechecking ) 
 * The Action interface only forces action to have a "type" properties
 */

/**
 * Fetch Feed
 */
export class fetchFeed implements Action {
    readonly type = FETCH_FEED;
    constructor(public payload?: any) {}
}

export class fetchFeedSuccess implements Action {

    // Payload property
    payload: { posts: Array<any> };

    readonly type = FETCH_FEED_SUCCESS;
    constructor(posts: Array<any>) {
        // Take the posts array as a parameter and put it into the payload
        this.payload = { posts };
    }
}

export class fetchFeedError implements Action {

    payload: { error: any }
    
    readonly type = FETCH_FEED_ERROR;
    constructor(error: any) {
        this.payload = { error }
    }
}

/**
 * Fetch Trending
 */
export class fetchTrending implements Action {
    readonly type = FETCH_TRENDING;
    constructor(public payload?: any) {}
}

export class fetchTrendingSuccess implements Action {

    // Payload property
    payload: { posts: Array<any> };

    readonly type = FETCH_TRENDING_SUCCESS;
    constructor(posts: Array<any>) {
        // Take the posts array as a parameter and put it into the payload
        this.payload = { posts };
    }
}

export class fetchTrendingError implements Action {

    payload: { error: any }
    
    readonly type = FETCH_TRENDING_ERROR;
    constructor(error: any) {
        this.payload = { error }
    }
}

/**
 * Fetch Hot
 */
export class fetchHot implements Action {
    readonly type = FETCH_HOT;
    constructor(public payload?: any) {}
}

export class fetchHotSuccess implements Action {

    // Payload property
    payload: { posts: Array<any> };

    readonly type = FETCH_HOT_SUCCESS;
    constructor(posts: Array<any>) {
        // Take the posts array as a parameter and put it into the payload
        this.payload = { posts };
    }
}

export class fetchHotError implements Action {

    payload: { error: any }
    
    readonly type = FETCH_HOT_ERROR;
    constructor(error: any) {
        this.payload = { error }
    }
}

/**
 * Fetch Created
 */
export class fetchCreated implements Action {
    readonly type = FETCH_CREATED;
    constructor(public payload?: any) {}
}

export class fetchCreatedSuccess implements Action {

    // Payload property
    payload: { posts: Array<any> };

    readonly type = FETCH_CREATED_SUCCESS;
    constructor(posts: Array<any>) {
        // Take the posts array as a parameter and put it into the payload
        this.payload = { posts };
    }
}

export class fetchCreatedError implements Action {

    payload: { error: any }
    
    readonly type = FETCH_CREATED_ERROR;
    constructor(error: any) {
        this.payload = { error }
    }
}

/**
 * Fetch Promoted
 */
export class fetchPromoted implements Action {
    readonly type = FETCH_PROMOTED;
    constructor(public payload?: any) {}
}

export class fetchPromotedSuccess implements Action {

    // Payload property
    payload: { posts: Array<any> };

    readonly type = FETCH_PROMOTED_SUCCESS;
    constructor(posts: Array<any>) {
        // Take the posts array as a parameter and put it into the payload
        this.payload = { posts };
    }
}

export class fetchPromotedError implements Action {

    payload: { error: any }
    
    readonly type = FETCH_PROMOTED_ERROR;
    constructor(error: any) {
        this.payload = { error }
    }
}

/**
 * Fetch By Votes
 */
export class fetchByVotes implements Action {
    readonly type = FETCH_BY_VOTES;
    constructor(public payload?: any) {}
}

export class fetchByVotesSuccess implements Action {

    // Payload property
    payload: { posts: Array<any> };

    readonly type = FETCH_BY_VOTE_SUCCESS
    constructor(posts: Array<any>) {
        // Take the posts array as a parameter and put it into the payload
        this.payload = { posts };
    }
}

export class fetchByVotesError implements Action {

    payload: { error: any }
    
    readonly type = FETCH_BY_VOTE_ERROR;
    constructor(error: any) {
        this.payload = { error }
    }
}

/**
 * Fetch By Payout
 */
export class fetchByPayout implements Action {
    readonly type = FETCH_BY_PAYOUT;
    constructor(public payload?: any) {}
}

export class fetchByPayoutSuccess implements Action {

    // Payload property
    payload: { posts: Array<any> };

    readonly type = FETCH_BY_PAYOUT_SUCCESS
    constructor(posts: Array<any>) {
        // Take the posts array as a parameter and put it into the payload
        this.payload = { posts };
    }
}

export class fetchByPayoutError implements Action {

    payload: { error: any }
    
    readonly type = FETCH_BY_PAYOUT_ERROR;
    constructor(error: any) {
        this.payload = { error }
    }
}

/**
 * Fetch By Active
 */
export class fetchByActive implements Action {
    readonly type = FETCH_BY_ACTIVE;
    constructor(public payload?: any) {}
}

export class fetchByActiveSuccess implements Action {

    // Payload property
    payload: { posts: Array<any> };

    readonly type = FETCH_BY_ACTIVE_SUCCESS
    constructor(posts: Array<any>) {
        // Take the posts array as a parameter and put it into the payload
        this.payload = { posts };
    }
}

export class fetchByActiveError implements Action {

    payload: { error: any }
    
    readonly type = FETCH_BY_ACTIVE_ERROR;
    constructor(error: any) {
        this.payload = { error }
    }
}

/**
 * Fetch By Cashout
 */
export class fetchByCashout implements Action {
    readonly type = FETCH_BY_ACTIVE;
    constructor(public payload?: any) {}
}

export class fetchByCashoutSuccess implements Action {

    // Payload property
    payload: { posts: Array<any> };

    readonly type = FETCH_BY_CASHOUT_SUCCESS
    constructor(posts: Array<any>) {
        // Take the posts array as a parameter and put it into the payload
        this.payload = { posts };
    }
}

export class fetchByCashoutError implements Action {

    payload: { error: any }
    
    readonly type = FETCH_BY_CASHOUT_ERROR;
    constructor(error: any) {
        this.payload = { error }
    }
}

/* 
 * Type Action contains every possible action of an action file
 * This will be useful with typechecking later on ( in reducers ). 
 */
export type Action = 
    fetchFeed |
    fetchFeedError | 
    fetchFeedSuccess |
    fetchTrending |
    fetchTrendingError |
    fetchTrendingSuccess |
    fetchHot |
    fetchHotError |
    fetchHotSuccess |
    fetchCreated | 
    fetchCreatedError |
    fetchCreatedSuccess |
    fetchPromoted |
    fetchPromotedError |
    fetchPromotedSuccess |
    fetchByVotes |
    fetchByVotesError |
    fetchByVotesSuccess |
    fetchByPayout |
    fetchByPayoutError |
    fetchByPayoutSuccess |
    fetchByActive |
    fetchByActiveError |
    fetchByActiveSuccess;