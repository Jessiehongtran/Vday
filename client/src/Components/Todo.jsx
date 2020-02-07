import React from 'react';
import '../Styles/Todo.scss';

const Todo = (props) => {

    console.log('props in Todo', props)

    return (
        <div className="todo">
            <p className="todo-box">{props.data.task}</p>
        </div>
    )
}

export default Todo;