import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';
import Test from './components/pages/Test';
import { v4 as uuid } from 'uuid';
import { arrayMove } from 'react-sortable-hoc';
import './App.css';


// If using an API
//import axios from 'axios';


class App extends Component {

    /* Placeholder todos
    state = {
        todos: [
            {
                id: uuid(),
                title: 'Takin\' out the trash... Takin\' out the trash... AT NIGHT!',
                completed: false
            },
            {
                id: uuid(),
                title: 'Dinner with wife',
                completed: false
            },
            {
                id: uuid(),
                title: 'Meeting with boss',
                completed: false
            },
            {
                id: uuid(),
                title: 'Do interview with U of M Library of Technology',
                completed: false
            }
        ]
    } */

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
    addTodo = (title) => {
        const newTodo = {
            id: uuid(),
            title: title,
            completed: false
        }

        let newState = { todos: [...this.state.todos, newTodo]};
        this.setState(newState);
        this.updateStorage(newState.todos);
    }   

    updateTodo = (id, title) => {
        let newState = { todos: this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.title = title;
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
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header />
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                <AddTodo addTodo={this.addTodo} />
                                
                                    <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo} reorderTodos={this.reorderTodos.bind(this)} />
                                
                                
                            </React.Fragment>
                        )} />
                        <Route path="/about" component={About} />
                        <Route path="/test" component={Test} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
