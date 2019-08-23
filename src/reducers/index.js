import { combineReducers } from 'redux';

export const initState = {
    users: [], //все пользователи
    tasks: [], //все задачи
    tasksUsers: [], //все задачи и пользователи чьи задачи
    userSelect: [], //выбранный пользователь и данные по нем
    userTasks: [], //задачи выбранного пользователя
    userChangeData: [{}],
    //Детектип загрузки каждых данных отдельно
    isFetchingUsersData: false,
    isFetchingTasksData: false,
    isFetchingSelectUser: false,
    isFetchingUseTasks: false
};

const mainReducer = (state = initState, action) => {
    switch(action.type) {
        //Получает данные всех пользователей
        case "GET_USERS_SUCCESS":
            return {
                ...state,
                users: action.payload
        };  
        //Детектит статус загрузки данных всех пользователей
        case "STATUS_DATA_USERS_DATA":
            return {
                ...state,
                isFetchingUsersData: action.payload
        }; 
        //Детектит статус загрузки данных всех задач
        case "STATUS_DATA_TASKS_DATA":
            return {
                ...state,
                isFetchingTasksData: action.payload
        };
        //Детектит статус загрузки данных выбранного пользователя
        case "STATUS_DATA_SELECT_USER_DATA":
            return {
                ...state,
                isFetchingSelectUser: action.payload
        };
        //Детектит статус загрузки данных задач выбранного пользователя
        case "STATUS_DATA_SELECT_TASKS_USER_DATA":
            return {
                ...state,
                isFetchingUseTasks: action.payload
        };
        //Получает данные всех задач
        case "GET_TASKS_SUCCESS":
            return {
                ...state,
                tasks: action.payload
        };    
        //Принмает данные всех задач и все пользователей и добавляет имя пользователя в массив задач
        case "GET_TASKS_USERS":
            let filterUsers = action.payload;
            let filterTasks = action.tasks;
            let mapTasks = {}; 
            filterUsers.map(function(data) {
                mapTasks[data.id] = data
            });
            filterTasks.map(function(data) {
              data.userName = mapTasks[data.userId].name
            });
            return {
                ...state,
                tasksUsers: filterTasks
        };  
        //Получает данные выбранного пользователя
        case "GET_USER_SELECT":
            return {
                ...state,
                userSelect: action.payload
        };   
        //Получает данные задач выбранного пользователя
        case "GET_USER_SELECT_TASKS":
            return {
                ...state,
                userTasks: action.payload
        };
        //Изменяет данные пользователя (по средствам данных введенных в форму)
        case "GET_CHANGE_DATA_USER":
            let newUserName = action.userNameChange;
            let newUserPhone = action.userPhoneChange;
            let newUserEmail = action.userEmailChange;
            let newUserWebSite = action.userWebsiteChange;
            return {
                ...state,
                userSelect: [{
                    name: newUserName,
                    phone: newUserPhone,
                    email: newUserEmail,
                    website: newUserWebSite
                }]
                
            };
        default:
            return state;    
    }
};

const todoApp = combineReducers ({
    mainReducer
});
  
export default todoApp;  