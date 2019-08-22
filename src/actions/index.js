//Данный action нужен для вызова saga getUsersData
export const actionGetUsers = () => {
	return { type: 'GET_USERS_REQUEST' }; 
};

//Action который запишет данные в state users 
export const actionUsersSuccess = (users) => {
	return { type: 'GET_USERS_SUCCESS', payload: users }; 
};

//Данный action переводит состояние isFetching в true/false
export const actionStatusData = (isFetching) => {
	return { type: 'STATUS_DATA', payload: isFetching }; 
};

//Данный action нужен для вызова saga getTasksData
export const actionGetTasks = () => {
	return { type: 'GET_TASKS_REQUEST' }; 
};

//Action который запишет данные в state tasks 
export const actionTasksSuccess = (tasks) => {
	return { type: 'GET_TASKS_SUCCESS', payload: tasks }; 
};

//Action который запишет в массив tasksUsers (имя пользователя и его id)
export const actionTasksUsers = (listUsers, listTasks) => {
	return { type: 'GET_TASKS_USERS', payload: listUsers, tasks: listTasks}; 
};

//Данный action вызовит saga getSelectUser
export const actionGetUserData = (userId) => {
	return { type: 'GET_USER_SELECT_SAGA', payload: userId}; 
};

//Action который запишет данные по выбранному пользователю
export const actionSelectUser = (userSelect) => {
	return { type: 'GET_USER_SELECT', payload: userSelect }; 
};

//Action который вызовит saga getUserTasks
export const actionUserTasksSaga = (userId) => {
	return { type: 'GET_USER_TASKS_SAGA', payload: userId }; 
};

//Action который запишет данные по задачам выбранного пользователя
export const actionSelectUserTasks = (userTasks) => {
	return { type: 'GET_USER_SELECT_TASKS', payload: userTasks }; 
};
