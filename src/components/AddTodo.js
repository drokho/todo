import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SaveSharpIcon from '@material-ui/icons/SaveSharp';

export class AddTodo extends Component {

    state = {
        title: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});

    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <textarea 
                    className="todo-input"
                    name="title"
                    rows="1"
                    placeholder="Add Todo..." 
                    value={this.state.title}
                    onChange={this.onChange}
                ></textarea>

                <button 
                    className="todo-submit"
                    type="submit"
                ><SaveSharpIcon className="save" /></button>
            </form>
        )
    }
}

//PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
}

export default AddTodo