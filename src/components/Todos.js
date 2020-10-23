import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import {SortableContainer, SortableElement, SortableHandle} from 'react-sortable-hoc';
import DragIndicatorSharpIcon from '@material-ui/icons/DragIndicatorSharp';
import arrayMove from 'array-move';

const SortableItem = SortableElement(({value}) => <li className="todo-li">{value}<DragHandle/></li>);
const DragHandle = SortableHandle(() => <span><DragIndicatorSharpIcon  className="drag-handle" /></span>);
const SortableList = SortableContainer(({items}) => {
  return (
    <ul className="todo-list">
      {items.map((value, index) => (
        <SortableItem key={`item-${value.key}`} index={index} value={value} />
      ))}
      
    </ul>
  );
});

export class Todos extends Component  {

    constructor(props){
        super(props);
        this.state = {items: [], newOrder: this.props.todos}

        //this.reorderTodos = this.props.reorderTodos.bind(this);
        
    }

    onSortEnd = ({oldIndex, newIndex}) => {

        this.setState(({items}) => ({
        items: arrayMove(items, oldIndex, newIndex),
        }));

        this.setState(({newOrder}) => ({
            newOrder: arrayMove(newOrder, oldIndex, newIndex),
        }));

        this.props.reorderTodos(this.state.newOrder);
        
    };

    render() {
        if(this.state.items.length !== this.props.todos.length) {
            this.setState({items: this.props.todos.map((todo) => (<TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo} updateTodo={this.props.updateTodo} />))});

            this.setState({newOrder: this.props.todos});
        }
        
        return <SortableList useDragHandle  useWindowAsScrollContainer="true" items={this.state.items} onSortEnd={this.onSortEnd} />;
    }

}



//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    reorderTodos: PropTypes.func.isRequired
}

export default Todos;
