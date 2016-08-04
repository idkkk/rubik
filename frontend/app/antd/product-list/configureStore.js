import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers'
import api from './api/products'
//use dev tools
import DevTools from './containers/DevTools'
import { persistState } from 'redux-devtools';

// unuse dev tools
const loggerMiddleware = createLogger()
let mockState = api.mockProducts()

// const createStoreWithMiddleware = applyMiddleware(
//   thunkMiddleware,
//   loggerMiddleware
// )(createStore)

// export default function configureStore(initialState = mockState) {
//   return createStoreWithMiddleware(rootReducer, initialState)
// }


//use dev tools

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore)


const enhancer = compose(
  applyMiddleware(thunkMiddleware),
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
);

export default function configureStore(initialState = mockState) {
  return createStoreWithMiddleware(rootReducer, initialState, enhancer)
}
