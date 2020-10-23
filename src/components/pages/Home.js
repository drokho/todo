import React, { Component } from 'react';
import Todos from '../Todos';
import Menu from '../Menu';
import AddTodo from '../AddTodo';
import { v4 as uuid } from 'uuid';



class Home extends Component {

    state = {
        todos: []
    }

    componentDidMount() {

        if(localStorage.getItem('state')) {

            let storedState = JSON.parse(localStorage.getItem('state'));
            this.setState({ todos: storedState} );

            for (var i in storedState) {
                if (storedState[i].completed === true) {
                    
                }
            }
        }



        /* if using an API
        axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(response => this.setState({ todos: response.data }));
        */
    }

    updateStorage = (state) => {
        let newStateString = JSON.stringify(state);
        localStorage.setItem('state', newStateString);
    }

    // toggle Complete
    markComplete = (id) => {
        console.log(this)
        let newState = { todos: this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;

        }) }

        this.setState(newState);
        this.updateStorage(newState.todos);
    }

    // delete a todo item in app
    deleteTodo = (id) => {

        let newState ={todos: [...this.state.todos.filter(todo => todo.id !== id)]};

        this.setState(newState);

        this.updateStorage(newState.todos);

    } 

    // delete todo item via API
    /*
    deleteTodo = (id) => {
        axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}))
    } */

    // Add Todo inside app
    addTodo = (title, description) => {

        let dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 1);
        dueDate = dueDate.toISOString().split('T')[0];

        const newTodo = {
            id: uuid(),
            title: title,
            description: description,
            priority: 1, 
            status: 1,
            completed: false,
            created: new Date().toLocaleDateString(),
            due: dueDate,
            alert: 'No Alarms'
        }

        let newState = { todos: [newTodo, ...this.state.todos]};
        this.setState(newState);
        this.updateStorage(newState.todos);
    }   

    updateTodo = (id, title, description, priority, status, due, alert) => {
        let newState = { todos: this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.title = title;
                todo.description = description;
                todo.priority = priority;
                todo.status = status;
                todo.due = due;
                todo.alert = alert;
            }
            return todo;

        }) }

        this.setState(newState);
        this.updateStorage(newState.todos);
    }

   

    reorderTodos(newState) {
        console.log(this.state.todos)
        this.setState({todos: newState});
        console.log(this.state.todos)

        this.updateStorage(this.state.todos)
        
    }

    // add Todo using api
    /*
    addTodo = (title) => {
        axios.post('http://jsonplaceholder.typicode.com/todos', {
            title: title, 
            completed: false
        })
            .then(response => this.setState({ todos: [...this.state.todos, response.data] }));
    } */

    render() {
        return( 
                <React.Fragment>
                    <div class="header-bar">
                        <Menu />
                        <AddTodo addTodo={this.addTodo} />
                    </div>
                        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo} reorderTodos={this.reorderTodos.bind(this)} />
                    
                    
                </React.Fragment>
            
        )   
    }
}

export default Home;