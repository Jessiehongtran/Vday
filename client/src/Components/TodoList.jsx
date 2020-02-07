import React from 'react';
import Todo from './Todo';


const TodoList = props => {

    console.log('props in TodoList', props)

    return (
        <div>
            {props.Todo.map(task => (
                <Todo key={task.id} data= {task}/>
            ))}
        </div>
    )
}

export default TodoList;