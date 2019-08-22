import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { Link } from 'react-router-dom';
import { actionGetUsers, actionGetTasks, actionTasksUsers, actionGetUserData, actionUserTasksSaga } from '../actions';

class ComponentTasks extends Component {

    componentDidMount() {
        store.dispatch(actionGetUsers());
        store.dispatch(actionGetTasks());
    }

    handleClick = (element) => {
        let userSelectId = element.target.getAttribute('id');
        store.dispatch(actionGetUserData(userSelectId));
        store.dispatch(actionUserTasksSaga(userSelectId));   
    }

    render() {
        if(this.props.isFetching) {
            store.dispatch(actionTasksUsers(this.props.users, this.props.tasks));
        } 
        let tasksUserProps = this.props.tasksUsers
        var listTasks = tasksUserProps.map(function(data) { //Все задачи каждого пользователя
            return (
                <div key={data.id}>
                    <ul>
                        <li>
                            <p>
                                <Link
                                    to={`/profile/${data.userId}`}
                                    id={data.userId} 
                                    onClick={this.handleClick}
                                >
                                    {data.userName}
                                </Link>
                            </p>
                            <p>{data.title}</p>
                        </li>
                    </ul>
                </div>
            );
        },this);
        return (
            <div className="component">
                <h3>Все задачи</h3>
                {listTasks}
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps = {}) => ({
    users: state.mainReducer.users,
    tasks: state.mainReducer.tasks,
    tasksUsers: state.mainReducer.tasksUsers,
    userSelect: state.mainReducer.userSelect,
    isFetching: state.mainReducer.isFetching
});

const mapDispatchToProps = {};

const Tasks = connect(mapStateToProps, mapDispatchToProps)(ComponentTasks);

export default Tasks;