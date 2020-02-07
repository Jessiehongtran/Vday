import React from 'react';
import '../Styles/Do.scss';
import Input from '../Components/Input';
import TodoList from '../Components/TodoList';


class Do extends React.Component {
    constructor(props){
        super();
        this.state = {

        }
    }


    render(){
        return (
            <div className="do">
                <h3>Do</h3>
                <Input 
                    addTask = {this.props.addTask}
                />
                <TodoList 
                    Todo = {this.props.Todo}
                />
            </div>  
        )
    }
}


export default Do;