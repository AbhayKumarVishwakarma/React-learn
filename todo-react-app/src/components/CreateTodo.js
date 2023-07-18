import React, { useState } from 'react'
import './CreateTodo.css'

const CreateTodo = ({ addTodo }) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const titleValue = (e) => {
        setTitle(e.target.value)
    }

    const descriptionValue = (e) => {
        setDescription(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const newTodo = {
            id: Date.now(),
            title,
            description,
            completed: false,
        };
        addTodo(newTodo);
        setTitle('');
        setDescription('');
    }

    return (
        <div className='form-cont'>
            <h2> New Todo</h2>
            <form onSubmit={submitHandler}>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Title</label>
                    <input type="text" value={title} onChange={titleValue} class="form-control" />
                </div>
                <div class="form-group my-3">
                    <label for="exampleFormControlTextarea1">Description</label>
                    <textarea class="form-control" value={description} onChange={descriptionValue} rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default CreateTodo