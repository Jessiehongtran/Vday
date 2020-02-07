import React from 'react';
import '../Styles/Donot.scss';
import Input from '../Components/Input';
import NotTodoList from '../Components/NotTodoList';


class Donot extends React.Component {
    constructor(props){
        super();
        this.state = {
            name: "nontask",
            placeholder: "Do not..."
        }

    }


    render(){

        console.log('props in Donot', this.props)

        return (
            <div className="donot">
            <h3>Do Not</h3>
            <Input 
                addNonTask = {this.props.addNonTask}
                name={this.state.name}
                placeholder = {this.state.placeholder}
            />
            <NotTodoList 
                NotTodo = {this.props.NotTodo}
            />
            </div>  
        )
    }
}


export default Donot;