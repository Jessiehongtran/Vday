import React from 'react';
import Do from './Views/Do';
import Donot from './Views/Donot';
import './App.css';
import {TodoData} from './Data/TodoData';
import {NotTodoData} from './Data/NotTodoData';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        Todo: TodoData,
        NotTodo: NotTodoData
    }
    
  }


  addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      task: taskName
    };
    this.setState({
      Todo: [...this.state.Todo, newTask]
    })
  }


  addNonTask = (taskName) => {
    const newNonTask = {
      id: Date.now(),
      nontask: taskName
    };
    this.setState({
      NotTodo: [...this.state.NotTodo, newNonTask]
    })
  }

  render(){

    console.log('Todo', this.state.Todo)
    

    return (
      <div className="App">
        <div className="intro">
          <h1>Vday for</h1>
          <img src="https://res.cloudinary.com/dfulxq7so/image/upload/v1581115033/output-onlinepngtools_avnrbc.png" alt="the half full"/>
        </div>
        <div className="App-center">
          <Do
            addTask = {this.addTask}
            Todo = {this.state.Todo}
          />
          <Donot
            addNonTask = {this.addNonTask}
            NotTodo = {this.state.NotTodo}
          />
        </div>
      </div>
    )
  }
}

export default App;