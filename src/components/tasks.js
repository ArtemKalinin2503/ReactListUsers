import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { actionGetUsers, actionGetTasks, actionFilterUsers } from '../actions'
import store from '../store';

class ComponentTasks extends Component {

    componentDidMount() {
        store.dispatch(actionGetUsers());
        store.dispatch(actionGetTasks());
    }

    render() {
        if(this.props.isFetching) {
            // console.log('RENDER')
            // console.log(this.props.users);
            store.dispatch(actionFilterUsers(this.props.users, this.props.tasks));
            console.log(this.props.filterUsers);
        } 
        return (
            <div className="component">
                Второстипенный компонент
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps = {}) => ({
    users: state.mainReducer.users,
    tasks: state.mainReducer.tasks,
    filterUsers: state.mainReducer.filterUsers,
    isFetching: state.mainReducer.isFetching
});

const mapDispatchToProps = {};

const Tasks = connect(mapStateToProps, mapDispatchToProps)(ComponentTasks);

export default Tasks;