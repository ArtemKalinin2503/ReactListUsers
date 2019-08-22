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
            var profileUser = this.props.userSelect.map(function(data) { 
                return (
                    <div>
                        <p>{data.name}</p>
                        <p>Задачи {data.name}</p>
                        <ul>
                            <li>Имя: {data.name}</li>
                            <li>Телефон: {data.phone}</li>
                            <li>Email: <a href={'mailto:'+ data.email}>{data.email}</a></li>
                            <li>Website: <a href={data.website}>{data.website}</a></li>
                        </ul>
                    </div>
                );
            });
        }
        return (
            <div>
                {profileUser}
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