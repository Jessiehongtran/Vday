import React from 'react';
import '../Styles/NotTodo.scss';

const NotTodo = (props) => {

    console.log('props in NotTodo', props)

    return (
        <div className="notTodo">
            <p className="notTodo-box">{props.data.nontask}</p>
        </div>
    )
}

export default NotTodo;