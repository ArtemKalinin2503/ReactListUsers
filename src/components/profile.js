import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import store from '../store';
import { Link } from 'react-router-dom';
import { actionGetUsers, actionGetTasks, actionTasksUsers } from '../actions';

class ComponentProfile extends Component {

    componentDidMount() {
      
    }

    render() {
        if(this.props.isFetching) {
            console.log(this.props.userSelect);
        }
        return (
            <div>
                Компонент Profile
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

const Profile = connect(mapStateToProps, mapDispatchToProps)(ComponentProfile);

export default Profile;