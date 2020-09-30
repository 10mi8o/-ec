import { 
  createStore as reduxCreateStore,
  combineReducers,
} from 'redux';

import { UsersReducer } from 'reducks/users/reducers';

export default function createStore() {
  return reduxCreateStore(
    combineReducers({
      users: UsersReducer
    })
  )
}