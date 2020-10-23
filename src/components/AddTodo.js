import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LibraryAddSharpIcon from '@material-ui/icons/LibraryAddSharp';

export class AddTodo extends Component {

    state = {
        title: '',
        description: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title, 'Add a description...');
        this.setState({title: ''});
        this.setState({description: ''});

    }

    render() {
        return (
            <form className="add-todo" onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input
                    type="text"
                    className="todo-input"
                    name="title"
                    rows="1"
                    placeholder="Add Task..." 
                    value={this.state.title}
                    onChange={this.onChange}
                />

                <button 
                    className="todo-submit"
                    type="submit"
                ><LibraryAddSharpIcon className="save" /></button>
            </form>
        )
    }
}

//PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
}

export default AddTodo