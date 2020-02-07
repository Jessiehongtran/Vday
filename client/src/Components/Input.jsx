import React from 'react';
import '../Styles/Input.scss';

class Input extends React.Component {
    constructor(props){
        super();
        this.state = {
            task: '',
            nontask: ''
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
        console.log('nontask', this.state.nontask)
        if (this.state.task){
            this.props.addTask(this.state.task)
        } else {
        this.props.addNonTask(this.state.nontask)
        }
        
        
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.task || this.state.nontask}
                    name={this.props.name}
                    onChange={this.handleChange}
                    placeholder={this.props.placeholder}
                />
            </form>

        )
    }

}

export default Input;