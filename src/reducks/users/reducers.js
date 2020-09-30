import * as Actions from 'reducks/users/actions';
import initialState from 'reducks/store/initialState';
import { Action } from 'history';

export const UsersReducer = (state = initialState.users, action) => {
  switch(action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload
      }
    default: 
      return state
  }
}