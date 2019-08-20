import { combineReducers } from 'redux';

export const initState = {
    users: [],
    tasks: [],
    filterUsers: [],
    isFetching: false
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
        case "GET_FILTER_USERS":
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
                filterUsers: filterTasks
        };    
        default:
            return state;    
    }
};

const todoApp = combineReducers ({
    mainReducer
});
  
export default todoApp;  