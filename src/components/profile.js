import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import '../App.css';
import {actionCnahgeDataUser} from '../actions';

class ComponentProfile extends Component {

    componentDidMount() {
      
    }

    handleSubmit = (event) => {
        event.preventDefault();  
        let userName = event.target.name.value;
        let userPhone = event.target.tel.value;
        let userEmail = event.target.email.value;
        let userSite = event.target.site.value;
        store.dispatch(actionCnahgeDataUser(userName, userPhone, userEmail, userSite));
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
            var tasksUser = this.props.userTasks.map(function(data){
                return (
                    <div>
                        <ul>
                            <li data-completed={data.completed}>
                                <span className={data.completed ? 'complited' : ''}>{data.title}</span>
                            </li>
                        </ul>
                    </div>
                )
            })
            var formUser = (
                <form onSubmit={ e => this.handleSubmit(e)}>
                    <div>
                        <label>Имя</label>
                        <input type="text" defaultValue={this.props.userSelect[0].name} name="name"></input>
                    </div>   
                    <div>
                        <label>Телефон</label>
                        <input type="tel" defaultValue={this.props.userSelect[0].phone} name="tel"></input>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" defaultValue={this.props.userSelect[0].email} name="email"></input>
                    </div>
                    <div>
                        <label>Сайт</label>
                        <input type="text" defaultValue={this.props.userSelect[0].website}  name="site"></input>
                    </div>
                    <div>
                        <input type="submit" value="Сохранить" ></input>
                    </div>     
                </form>
            )
      
        }
        return (
            <div>
                {profileUser}
                {formUser}
                {tasksUser}
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps = {}) => ({
    users: state.mainReducer.users,
    tasks: state.mainReducer.tasks,
    tasksUsers: state.mainReducer.tasksUsers,
    userSelect: state.mainReducer.userSelect,
    userTasks: state.mainReducer.userTasks,
    isFetching: state.mainReducer.isFetching
});

const mapDispatchToProps = {};

const Profile = connect(mapStateToProps, mapDispatchToProps)(ComponentProfile);

export default Profile;