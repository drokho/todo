import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import RadioButtonUncheckedSharpIcon from '@material-ui/icons/RadioButtonUncheckedSharp';
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
import ContentEditable from 'react-contenteditable';




export class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.contentEditable = React.createRef();
        this.contentEditable2 = React.createRef();
        this.state = {
                        id: this.props.todo.id,
                        title: this.props.todo.title,
                        description: this.props.todo.description,
                        editable: false,
                        detailsOpen: false,
                        created: this.props.todo.created,
                        due: this.props.todo.due,
                        alert: this.props.todo.alert,
                        status: this.props.todo.status,
                        priority: this.props.todo.priority,
                        statusMenu: "",
                        priorityMenu: ""
                    };
    };

    doNothing = (evt) => {
        evt.stopPropagation();
    }

    updateTodo = () => {
        this.props.updateTodo(this.state.id, this.state.title, this.state.description, this.state.priority, this.state.status, this.state.due, this.state.alert);
    }

    showStatusVal = (status) => {
        if(status === 1 ) return "New";
        if(status === 2 ) return "In Process";
        if(status === 3 ) return "Done";
        if(status === 4 ) return "Blocked";
    }

    statusMenu = (evt) => {
        this.setState({statusMenu: this.state.statusMenu === '' ? 'open': '' });
        evt.stopPropagation();
    }

    priorityMenu = (evt) => {
        this.setState({priorityMenu: this.state.priorityMenu === '' ? 'open': '' });
        evt.stopPropagation();
    }

    closeMenu = (evt) => {
        this.setState({priorityMenu: '', statusMenu: ''});
        evt.stopPropagation();
    }

    setStatus = (evt, val) => {
        evt.stopPropagation();
        this.setState({status: val}, () => this.updateTodo());
    }

    setPriority = (evt, val) => {
        evt.stopPropagation();
        this.setState({priority: val}, () => this.updateTodo());
    }

    showPriorityVal = (priority) => {
        if(priority === 1) 
            return (<i className="material-icons low">trending_down</i>); 
        if(priority === 2) 
            return (<i className="material-icons med">trending_flat</i>);  
        if(priority === 3) 
            return (<i className="material-icons hi">trending_up</i>); 
    }

    handleTitleChange = evt => {
        this.setState({title: evt.target.value});
    };

    handleDescriptionChange = (evt) => {
        this.setState({description: evt.target.value});
    }

    removePlaceholder = () => {
        if(this.contentEditable2.current.textContent === 'Add a description...')
            this.contentEditable2.current.textContent = '';
    }

    handleDueChange = (evt) => {
        this.setState({due:evt.target.value});
    }

    enableEdit = (evt) => {
        evt.stopPropagation();
        if(this.state.editable === false) {
            this.setState({editable: true});
            this.setState({detailsOpen: true});
        }
    }

    disableEdit = (evt) => {
        evt.stopPropagation();
        this.setState({editable: false});
        this.setState({detailsOpen: false});
        this.updateTodo();
    }

    


    render() {
        const {id, completed} = this.props.todo;

        return (
            <span className={`todo-content completed-${completed} editable-${this.state.editable}`} >
                <div>
                    <div className="complete-btn" onClick={this.props.markComplete.bind(this, id)}>
                        <RadioButtonUncheckedSharpIcon className="unchecked" />
                        <CheckCircleSharpIcon className="checked" />
                    </div>
                    <div className="task-content-container"  onClick={(evt) => this.enableEdit(evt)}>
                        <div className="title">
                            <ContentEditable
                                innerRef={this.contentEditable}
                                html={this.state.title} // innerHTML of the editable div
                                disabled={!this.state.editable}       // use true to disable editing
                                onChange={this.handleTitleChange} // handle innerHTML change
                                tagName='span' // Use a custom HTML tag (uses a div by default)  
                                
                            />
                            <div className="priority-container">
                                <div className="priority" onClick={(evt) => this.priorityMenu(evt)}>
                                    {this.showPriorityVal(this.state.priority)}
                                </div>
                                <div className={"priority-menu " + this.state.priorityMenu}>
                                    <div className="menu-closer" onClick={(evt) => this.closeMenu(evt)}></div>
                                    <div className="menu" onClick={(evt) => this.doNothing(evt)}>
                                        <div className="priority priority-1" onClick={(evt) => {this.setPriority(evt, 1); this.priorityMenu(evt)}}>{this.showPriorityVal(1)}</div>
                                        <div className="priority priority-1" onClick={(evt) => {this.setPriority(evt, 2); this.priorityMenu(evt)}}>{this.showPriorityVal(2)}</div>
                                        <div className="priority priority-1" onClick={(evt) => {this.setPriority(evt, 3); this.priorityMenu(evt)}}>{this.showPriorityVal(3)}</div>
                                        <div className="priority priority-1" onClick={(evt) => {this.setPriority(evt, 4); this.priorityMenu(evt)}}>{this.showPriorityVal(4)}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="status-container">
                                <div className={"status status-" + this.state.status} onClick={(evt) => this.statusMenu(evt)}>
                                    {this.showStatusVal(this.state.status) }
                                </div>
                                <div className={"status-menu " + this.state.statusMenu}>
                                    <div className="menu-closer" onClick={(evt) => this.closeMenu(evt)}></div>
                                    <div className="menu" onClick={(evt) => this.doNothing(evt)}>
                                        <div className="status status-1" onClick={(evt) => {this.setStatus(evt, 1); this.statusMenu(evt)}}>New</div>
                                        <div className="status status-2" onClick={(evt) => {this.setStatus(evt, 2); this.statusMenu(evt)}}>In Process</div>
                                        <div className="status status-3" onClick={(evt) => {this.setStatus(evt, 3); this.statusMenu(evt)}}>Done</div>
                                        <div className="status status-4" onClick={(evt) => {this.setStatus(evt, 4); this.statusMenu(evt)}}>Blocked</div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className={'details-open-' + this.state.detailsOpen}>
                            
                            <div className="task-info">
                                <div className="description">
                                    <ContentEditable
                                        innerRef={this.contentEditable2}
                                        html={this.state.description} // innerHTML of the editable div
                                        disabled={!this.state.editable}       // use true to disable editing
                                        onChange={this.handleDescriptionChange} // handle innerHTML change
                                        onFocus={this.removePlaceholder}
                                        
                                    />
                                    
                                </div>
                                
                            </div>
                            <div className="task-tools">
                                <div className="time-stuff tool-col">
                                    <div className="created">
                                        Created: {this.state.created}
                                    </div>
                                    <div className="due">
                                        Due: <input type="date" value={this.state.due} onChange={this.handleDueChange}/>
                                    </div>
                                </div>
                                <div className="tool-col">
                                    {/* <div className="alarm">
                                        <AddAlertSharpIcon className="tool-icon"/> <span>{this.state.alert}</span>
                                    </div> */}
                                    <div className="delete">
                                        <DeleteSharpIcon className="delete-btn" onClick={ this.props.deleteTodo.bind(this, id) } /><span>Delete</span>
                                    </div>
                                </div>
                                
                            </div>
                            
                            
                            <div className="close-handle" onClick={(evt) => this.disableEdit(evt)}><i  className="material-icons">keyboard_arrow_up</i></div>
                        </div>
                        
                    </div>
                </div>
                
                
                  
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