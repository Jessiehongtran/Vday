import React from 'react';
import NotTodo from './NotTodo';


const NotTodoList = props => {

    console.log('props in NotTodoList', props)

    return (
        <div>
            {props.NotTodo.map(task => (
                <NotTodo key={task.id} data= {task}/>
            ))}
        </div>
    )
}

export default NotTodoList;