import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { restuarantListReducer } from './Reducer/restuarantReducer';

const reducers = combineReducers({
    restuarantReducer:restuarantListReducer

})

const middleware = [thunk]

// store
const store =createStore(reducers,applyMiddleware(...middleware))


export default store
