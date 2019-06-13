import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
        this.todoDelete = this.todoDelete.bind(this);
    }


    componentDidMount() {
        this.loadTodos();
    }

    loadTodos() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({todos: response.data});
            })
            .catch(function (error) {
                console.log(error);
        })
    }

    todoDelete(id) {
        axios.delete(`http://localhost:4000/todos/delete/${id}`)
        .then(response => {
            console.log("todo has been deleted");
            this.loadTodos();
        })
        .catch(function(error) {
            console.log("delete fail");
        })
    }

    render() {
        const todoList = 
            this.state.todos.map(function(currentTodo, i) {
               return(
               <tr>
                   <td className={currentTodo.todo_completed ? 'completed' : ''}>{currentTodo.todo_description}</td>
                   <td className={currentTodo.todo_completed ? 'completed' : ''}>{currentTodo.todo_responsible}</td>
                   <td className={currentTodo.todo_completed ? 'completed' : ''}>{currentTodo.todo_priority}</td>
                   <td>
                       <Link to={"/edit/"+currentTodo._id}>Editer</Link>
                   </td>
                   <td>
                       <button onClick={() => this.todoDelete(currentTodo._id)}>Supprimer</button>
                   </td>
               </tr>);
           },this);
        return (
            <div>
                <h3>Liste des Todos</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsable</th>
                            <th>Priorité</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { todoList }
                    </tbody>
                </table>
            </div>
        )
    }
}