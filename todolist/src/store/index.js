import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import todoSatas from './sagas';
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
    // applyMiddleware(thunk)
  );
// mount it on the Store
const store = createStore(
    reducer,
    enhancer
);

// then run the saga
sagaMiddleware.run(todoSatas);

// render the application

export default store;