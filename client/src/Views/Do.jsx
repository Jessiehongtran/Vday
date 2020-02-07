import React from 'react';
import '../Styles/Do.scss';
import Input from '../Components/Input';
import TodoList from '../Components/TodoList';


class Do extends React.Component {
    constructor(props){
        super();
        this.state = {
            name: "task",
            placeholder: "Do..."
        }
    }


    render(){
        return (
            <div className="do">
                <h3>Do</h3>
                <Input 
                    addTask = {this.props.addTask}
                    name = {this.state.name}
                    placeholder = {this.state.placeholder}
                />
                <TodoList 
                    Todo = {this.props.Todo}
                />
            </div>  
        )
    }
}


export default Do;