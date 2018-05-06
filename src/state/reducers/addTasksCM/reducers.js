import { Map } from 'immutable';
import * as types from './types';
import initialState from '../../initialState';

export default function (state = initialState.uisAddTaskContent, action) {
    switch (action.type) {
      case types.SHOW_TASK_FORM:
        return state.set("contentKey", "DEFAULT");
      default:
        return state;
    }
}