
//Action сетевые для полученния данных

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

export const actionFilterUsers = (listUsers, listTasks) => {
	return { type: 'GET_FILTER_USERS', payload: listUsers, tasks: listTasks}; 
};

