import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import CategoryReducer from './reducers/category';
import EventsReducer from './reducers/events';
import CartReducer from './reducers/cart';
import OrdersReducer from './reducers/orders';

const RootReducer = combineReducers({
  categories: CategoryReducer,
  events: EventsReducer,
  cart: CartReducer,
  orders: OrdersReducer,
});

const store = createStore(RootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;

export default store;
