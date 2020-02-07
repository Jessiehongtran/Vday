import React from 'react';

class Input extends React.Component {
    constructor(props){
        super();
        this.state = {
            task: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log('task', this.state.task)
        this.props.addTask(this.state.task)
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.task}
                    name="task"
                    onChange={this.handleChange}
                    placeholder="Do..."
                />
            </form>

        )
    }

}

export default Input;