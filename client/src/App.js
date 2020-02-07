import React from 'react';
import Do from './Views/Do';
import Donot from './Views/Donot';
import './App.css';
import {TodoData} from './Data/TodoData';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
        Todo: TodoData
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

  render(){

    console.log('Todo', this.state.Todo)
    

    return (
      <div className="App">
        <h1>Vday</h1>
        <div className="App-center">
          <Do
            addTask = {this.addTask}
            Todo = {this.state.Todo}
          />
          <Donot/>
        </div>
      </div>
    )
  }
}

export default App;