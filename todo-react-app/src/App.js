import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Routes, NavLink, Link } from 'react-router-dom';
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
    setTodos(updatedTodos)
  }

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos)
  }

  return (
    <>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/todos" element={<TodoList
              todos={todos}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
            />} />
            <Route exact path="/create" element={<CreateTodo addTodo={addTodo} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;



