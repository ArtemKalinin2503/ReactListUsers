import { combineReducers } from 'redux';

export const initState = {
    users: [], //все пользователи
    tasks: [], //все задачи
    tasksUsers: [], //все задачи и пользователи чьи задачи
    userSelect: [], //выбранный пользователь и данные по нем
    userTasks: [], //задачи выбранного пользователя
    userChangeData: [{}],
    isFetching: false //Детектим загрузку данных
};

const mainReducer = (state = initState, action) => {
    switch(action.type) {
        case "GET_USERS_SUCCESS":
            return {
                ...state,
                users: action.payload
        };   
        case "STATUS_DATA":
            return {
                ...state,
                isFetching: action.payload
        }; 
        case "GET_TASKS_SUCCESS":
            return {
                ...state,
                tasks: action.payload
        };    
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
        case "GET_USER_SELECT":
            return {
                ...state,
                userSelect: action.payload
        };   
        case "GET_USER_SELECT_TASKS":
            return {
                ...state,
                userTasks: action.payload
        };
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