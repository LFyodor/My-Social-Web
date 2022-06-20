import { put, call, takeEvery } from 'redux-saga';
import { requestSite, requestSiteSuccess, requestSiteError } from '../store/loadSlice';

function* watchFetchSite() {
    yield takeEvery('FETCHED_SITE', fetchSiteAsync);
}

function* fetchSiteAsync() {
    try {
        yield put(requestSite());
        const data = yield call(() => {
            return fetch('https://test-api-post.herokuapp.com/')
                .then(res => res.json())
            }
        );
        yield put(requestSiteSuccess(data));
    } catch (error) {
        yield put(requestSiteError());
    }
}