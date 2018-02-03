// Import Actions types from actions/dogs
import * as fromDogsActions from '../actions/posts'

/*
 *  Defining our state datatype
 *  For now, we only need an imgUrl from the current dog
 */
export interface State {
    isLoading: boolean,
    currentDog: {
        imgUrl: string
    }
}

/*
 * Defining our initialState
 * This state will be load by default when the application starts
 */
export const initialState: State = {
    isLoading: false,
    currentDog: {
        imgUrl: "https://dog.ceo/api/img/pembroke/n02113023_3945.jpg"
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
export function reducer(state: State = initialState, action: fromDogsActions.Action) {

    /*
     * Every action has an action.type property
     */ 
    switch (action.type) {

        case fromDogsActions.FETCH_RANDOM_DOG: {
            // As stated above we're creating a new state
            // We're putting the new URL in the imgUrl props
            return {
                // ...state : copy every properties from state into the new object
                // We have to do this because the state is Immutable.
                ...state,
                // Request is beeing processed
                isLoading: true
            }
        }

        case fromDogsActions.FETCH_RANDOM_DOG_SUCCESS: {
            // We get the dogImgUrl from the action payload
            // Then we update the state with the new dog image url
            const dogImgUrl = action.payload.dogImgUrl;

            return {
                currentDog: {
                    imgUrl: dogImgUrl
                },
                // Request is done, there is no more loading
                isLoading: false
            }
        }

        case fromDogsActions.FETCH_RANDOM_DOG_ERROR: {
            return {
                ...state,
                // Request is done, there is no more loading                
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