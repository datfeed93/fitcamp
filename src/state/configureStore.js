import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import rootSaga from './rootSaga';
import reducer from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, reducer);
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middlewares)));
sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);
const configureStore = {store, persistor};

export default configureStore;