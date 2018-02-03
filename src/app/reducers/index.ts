import {
    ActionReducerMap,
    ActionReducer,
    MetaReducer,
  } from '@ngrx/store';
  import { storeLogger } from 'ngrx-store-logger';
  import * as fromPostsReducer from './posts';
  
  /**
   * The state contains state from all parts of ouir application
   * The State interface defines every data needed for our app to work
   */
  export interface State {  
      dogs: fromPostsReducer.State
  }
  
  /**
   * Our app is split into reducers. 
   * Each reducers is responsible for one part of the overall state
   */
  export const reducers: ActionReducerMap<State> = {
      dogs: fromPostsReducer.reducer
  };
  
  // console.log all actions using storelogger
  export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return storeLogger()(reducer);    
  }
  
  /**
   * Meta reducers enables us to add feature to every reducers.
   * We're using it to log every action before and after it has been handled by reducers
   */
  export const metaReducers: MetaReducer<State>[] = [logger];