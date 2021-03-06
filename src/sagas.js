import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { actionUsersSuccess, actionStatusUsersData, actionStatusTasksData, actionStatusSelectUserData, actionStatusSelectTasksUserData, actionTasksSuccess, actionSelectUser, actionSelectUserTasks } from './actions/'

export default function* rootWatcher() {
    yield takeLatest('GET_USERS_REQUEST', getUsersData); 
    yield takeLatest('GET_TASKS_REQUEST', getTasksData); 
    yield takeLatest('GET_USER_SELECT_SAGA', getSelectUser);
    yield takeLatest('GET_USER_TASKS_SAGA', getUserTasks);
}

//Данная saga получит данные о всех пользователях
function* getUsersData() {
    yield put(actionStatusUsersData(false));
    if(window.hasOwnProperty('__DATA__') &&  window.__DATA__.users) {
        yield put(actionUsersSuccess(window.__DATA__.users));
        yield put(actionStatusUsersData(true));
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
        yield put(actionStatusUsersData(true));
    }
}

//Данная saga получит данные о всех задачах
function* getTasksData() {
    yield put(actionStatusTasksData(false));
    if(window.hasOwnProperty('__DATA__') &&  window.__DATA__.tasks) {
        yield put(actionTasksSuccess(window.__DATA__.tasks));
        yield put(actionStatusTasksData(true));
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
        yield put(actionStatusTasksData(true));
    }
}

//Данная saga получит данные о выбрано пользователе
function* getSelectUser(action) {
	yield put(actionStatusSelectUserData(false));
	const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/users?id=${action.payload}`); 
	if (response.status === 200) {
        yield put(actionSelectUser(response.data)); 
        yield put(actionStatusSelectUserData(true));
	} 
}

//Данная saga получит данные о задачах выбранного пользователя
function* getUserTasks(action) {
	yield put(actionStatusSelectTasksUserData(false));
	const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/todos?userId=${action.payload}`); 
	if (response.status === 200) {
        yield put(actionSelectUserTasks(response.data)); 
        yield put(actionStatusSelectTasksUserData(true));
	} 
}
