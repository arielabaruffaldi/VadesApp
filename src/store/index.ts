import {createStore, combineReducers} from 'redux';

import CategoryReducer from './reducers/category';
import EventsReducer from './reducers/events';

const RootReducer = combineReducers({
  categories: CategoryReducer,
  events: EventsReducer,
});

const store = createStore(RootReducer);

export type RootState = ReturnType<typeof store.getState>;

export default store;
