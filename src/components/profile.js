import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

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
        }
        return (
            <div>
                {profileUser}
                <form>
                    <div>
                        <label>Имя</label>
                        <input type="text" placeholder=""></input>
                    </div>   
                    <div>
                        <label>Телефон</label>
                        <input type="tel" placeholder=""></input>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" placeholder=""></input>
                    </div>
                    <div>
                        <label>Сайт</label>
                        <input type="text" placeholder=""></input>
                    </div>
                    <div>
                        <input type="submit" value="Сохранить"></input>
                    </div>     
                </form>
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