import React from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'

function TodoList({ todos, completeTodo, deleteTodo }) {

    if (todos.length > 0) {
        return (
            <div id='table-cont' class="container">
                <h2> Todo List </h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo) => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                completeTodo={completeTodo}
                                deleteTodo={deleteTodo}
                            />
                        ))}
                    </tbody>
                </table>

            </div>
        );
    }
    else {
        return (
            <div id='table-cont' class="container">
                <h2> Todo List </h2>
                <div class="alert alert-danger" role="alert">
                    Not find any todo!
                </div>
            </div>
        );
    }

}

export default TodoList
