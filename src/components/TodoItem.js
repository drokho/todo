import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import SaveSharpIcon from '@material-ui/icons/SaveSharp';
import ContentEditable from 'react-contenteditable';




export class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.contentEditable = React.createRef();
        this.state = {
                        html: this.props.todo.title,
                        editable: false
                    };
      };

    handleChange = evt => {
        this.setState({html: evt.target.value});
    };

    toggleEditable = (id, title) => {
        this.setState({editable: !this.state.editable});
        if (this.state.editable === true) {
            this.props.updateTodo(id, title);
            
        }
    }

    render() {
        const {id, completed} = this.props.todo;

        return (
            <span className={`completed-${completed} editable-${this.state.editable}`}>
                <input type="checkbox"  className="mark-complete" defaultChecked={completed ? 'checked' : ''} onChange={this.props.markComplete.bind(this, id)} /> {' '}
                <span className="title">
                
                <ContentEditable
                    innerRef={this.contentEditable}
                    html={this.state.html} // innerHTML of the editable div
                    disabled={!this.state.editable}       // use true to disable editing
                    onChange={this.handleChange} // handle innerHTML change
                    tagName='span' // Use a custom HTML tag (uses a div by default)
                />
                
                
                </span>
                <span className="tools">
                    <button className="edit-btn" onClick={() => this.toggleEditable(id, this.state.html)}><EditSharpIcon className="edit" /><SaveSharpIcon className="save" /></button>
                    <button className="delete-btn" onClick={ this.props.deleteTodo.bind(this, id) } ><DeleteSharpIcon className="delete" /></button>
                </span>
                    
            </span>
        )
    }
}

//PropTypes 
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired
}


export default TodoItem