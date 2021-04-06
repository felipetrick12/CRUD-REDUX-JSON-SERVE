import { createStore,combineReducers,applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk';
import { productoReducer } from '../reducers/productoReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers(
    {
      productos: productoReducer
    }
);

export const store = createStore(
    reducers,
    composeEnhancers ( 
        applyMiddleware(thunk)
    )
);