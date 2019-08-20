import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { actionUsersSuccess, actionStatusData, actionTasksSuccess } from './actions/'

export default function* rootWatcher() {
    yield takeLatest('GET_USERS_REQUEST', getUsersData); 
    yield takeLatest('GET_TASKS_REQUEST', getTasksData); 
}

//Данная saga получит данные о всех пользователях
function* getUsersData() {
    yield put(actionStatusData(false));
    if(window.hasOwnProperty('__DATA__') &&  window.__DATA__.users) {
        yield put(actionUsersSuccess(window.__DATA__.users));
        yield put(actionStatusData(true));
        return;
    }
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users?');
    if (response.status === 200) {
        if(window.hasOwnProperty('__DATA__')) {
            window.__DATA__.users = response.data;
        } else {
            window.__DATA__ = {
                users: response.data,
            };
        }
        yield put(actionUsersSuccess(response.data));
        yield put(actionStatusData(true));
    }
}

//Данная saga получит данные о всех задачах
function* getTasksData() {
    yield put(actionStatusData(false));
    if(window.hasOwnProperty('__DATA__') &&  window.__DATA__.tasks) {
        yield put(actionTasksSuccess(window.__DATA__.tasks));
        yield put(actionStatusData(true));
        return;
    }
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/todos');
    if (response.status === 200) {
        if(window.hasOwnProperty('__DATA__')) {
            window.__DATA__.tasks = response.data;
        } else {
            window.__DATA__ = {
                tasks: response.data,
            };
        }
        yield put(actionTasksSuccess(response.data));
        yield put(actionStatusData(true));
    }
}