// Import Actions types from actions/dogs
import * as fromPostsActions from '../actions/posts'

const OTHER_DOG_URL = "https://dog.ceo/api/img/retriever-golden/n02099601_3869.jpg";

/*
 *  Defining our state datatype
 *  For now, we only need an imgUrl from the current dog
 */
export interface State {
    isLoading: boolean,
    posts: {
        data: any
    }
}

/*
 * Defining our initialState
 * This state will be load by default when the application starts
 */
export const initialState: State = {
    isLoading: false,
    posts: {
        data: "https://dog.ceo/api/img/pembroke/n02113023_3945.jpg"
    }

}

/*
 * This is our reducer. There is 2 parameter :
 * - state : The current state to be updated
 * - action : The action sent to the reducer ( with a type and a payload )
 * The reducer will use the action.type to make difference between actions
 * Notice : The reducer should be immutable. ( We should never do "state.prop = ..." ).
 * Instead we creating and returning a new state each time
 */
export function reducer(state: State = initialState, action: fromPostsActions.Action) {

    /*
     * Every action has an action.type property
     */ 
    switch (action.type) {

        /**
         * FETCH FEED
         */
        case fromPostsActions.FETCH_FEED: {
            return {
                ...state,
                isLoading: true
            }
        }

        case fromPostsActions.FETCH_FEED_SUCCESS: {
            const posts = action.payload.posts
            return {
                posts: {
                    data: posts
                },
                isLoading: false
            }
        }

        case fromPostsActions.FETCH_FEED_ERROR: {
            return {
                ...state,
                isLoading: false
            }
        }
        /*
         * By default, if we don't recognize the action
         * the next state is the same as the current state
         * So, we're just returning the state here.
         */
        default:
            return state;
    }

}