import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { PersistGate } from 'redux-persist/lib/integration/react';

import "bootstrap/dist/css/bootstrap.min.css";
import App from './components/App';
import reducers from './reducers';
import history from "./history.js";
import * as serviceWorker from './serviceWorker';

const persistConfig = {
 key: 'root',
 storage: storage,
 stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const reducer = persistReducer(persistConfig, reducers);

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);



// const store = createStore(
//   reducers,
//   composeWithDevTools(applyMiddleware(thunk))
// )

render(
  <Provider store={store}>
    <PersistGate loading={false} persistor={persistor}>
      <Router history={history}>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
