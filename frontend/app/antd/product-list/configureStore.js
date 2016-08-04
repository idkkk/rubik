import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers'
import api from './api/products'

const loggerMiddleware = createLogger()

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore)

let mockState = api.mockProducts()
export default function configureStore(initialState = mockState) {
  return createStoreWithMiddleware(rootReducer, initialState)
}
