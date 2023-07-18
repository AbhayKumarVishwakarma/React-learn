import React from 'react'

function TodoItem({ todo, completeTodo, deleteTodo }) {

    const { id, title, description, completed } = todo;

    const handleToggleComplete = () => {
        completeTodo(id);
    };

    const handleDeleteTodo = () => {
        deleteTodo(id);
    };

    return (
        <tr>
            <td>{title}</td>
            <td>{description}</td>
            <td><button className='complete' onClick={handleToggleComplete}>
                {completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
                <button className='delete' onClick={handleDeleteTodo}>Delete</button></td>
        </tr>
    );

}

export default TodoItem