/*
 *
 * History reducer
 *
 */
import produce from 'immer';
import { LOAD_REPOS_SUCCESS, LOAD_REPOS, LOAD_REPOS_ERROR } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  missions: [],
};

/* eslint-disable default-case, no-param-reassign */
const historyReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        break;

      case LOAD_REPOS_SUCCESS:
        draft.missions = action.repos;
        draft.loading = false;
        break;

      case LOAD_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default historyReducer;
