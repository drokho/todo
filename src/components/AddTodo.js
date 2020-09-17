import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
                    type="text" 
                    name="title"
                    style={{flex: '9', padding: '10px 20px', border: 'none', borderRadius: '0'}}
                    placeholder="Add Todo..." 
                    value={this.state.title}
                    onChange={this.onChange}
                ></textarea>

                <input 
                    className="btn"
                    type="submit"
                    value="Submit"
                    style={{flex: '2'}}
                />
            </form>
        )
    }
}

//PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
}

export default AddTodo