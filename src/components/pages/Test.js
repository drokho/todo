import React, {Component} from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';



const SortableItem = SortableElement(({value}) => <Duh text={value} />);

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
      
    </ul>
  );
});

class Duh extends Component {
    render() {
        return <li>{this.props.text}</li>;
    }
    

}

/* 
<Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo}/>
*/

class SortableComponent extends Component {

  state = {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
  };
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({items}) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };
  render() {
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;
  }
}

function Test() {
    return(
        <React.Fragment>
            <div className="content">
                <h1>Test</h1>
                <p>This is where I test stuff. </p>
                <SortableComponent />
            </div>
        </React.Fragment>
    )
}

export default Test;