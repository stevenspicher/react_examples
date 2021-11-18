// 3 Create a store
import { createStore } from "redux";

// 4 Import reducer and add it to our store.
import reducers from './reducers';

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );

export default store;