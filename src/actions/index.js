//Данный action нужен для вызова saga getUsersData
export const actionGetUsers = () => {
	return { type: 'GET_USERS_REQUEST' }; 
};

//Action который запишет данные в state users 
export const actionUsersSuccess = (users) => {
	return { type: 'GET_USERS_SUCCESS', payload: users }; 
};

//Данный action переводит состояние isFetchingUsersData в true/false
export const actionStatusUsersData = (isFetchingUsersData) => {
	return { type: 'STATUS_DATA_USERS_DATA', payload: isFetchingUsersData }; 
};

//Данный action переводит состояние isFetchingTasksData в true/false
export const actionStatusTasksData = (isFetchingTasksData) => {
	return { type: 'STATUS_DATA_TASKS_DATA', payload: isFetchingTasksData }; 
};

//Данный action переводит состояние isFetchingSelectUser в true/false
export const actionStatusSelectUserData = (isFetchingSelectUser) => {
	return { type: 'STATUS_DATA_SELECT_USER_DATA', payload: isFetchingSelectUser }; 
};

//Данный action переводит состояние isFetchingUseTasks в true/false
export const actionStatusSelectTasksUserData = (isFetchingUseTasks) => {
	return { type: 'STATUS_DATA_SELECT_TASKS_USER_DATA', payload: isFetchingUseTasks }; 
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

//Action который изменяет данные пользователя
export const actionCnahgeDataUser = (userNameChange, userPhoneChange, userEmailChange, userWebsiteChange) => {
	return { type: 'GET_CHANGE_DATA_USER', userNameChange: userNameChange, userPhoneChange: userPhoneChange, userEmailChange: userEmailChange, userWebsiteChange: userWebsiteChange}; 
};