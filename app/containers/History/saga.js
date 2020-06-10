import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_REPOS } from './constants';
import { reposLoaded, repoLoadingError } from './actions';

/**
 * SpaceX history request/response handler
 */
export function* getHistory() {
  const requestURL = 'https://api.spacexdata.com/v3/history';

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* gitHistory() {
  // Watches for LOAD_HISTORY actions and calls getHistory when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_REPOS, getHistory);
}
