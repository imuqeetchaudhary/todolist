import "./App.css";
import React, { useState } from "react";
import ToDoBox from "./components/ToDoBox";
import {
  TodosContext,
  NewTodosContext,
  IsOpenContext,
  SelectedTodoContext,
  HandleChangeContext,
  HandleSubmitContext,
  HandleDeleteClickContext,
  HandleEditClickContext,
  HandleEditChangeContext,
  TogglePopupContext,
} from "./components/Context";

function App() {
  const todosArray = [
    {
      id: 1,
      title: "ToDo 1",
    },
    {
      id: 2,
      title: "ToDo 2",
    },
    {
      id: 3,
      title: "ToDo 3",
    },
  ];

  // States

  const [todos, setTodos] = useState(todosArray);
  const [newTodo, setNewTodo] = useState({ id: null, title: "" });
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState({ id: null, title: "" });

  // Handler Functions

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo({ id: null, title: "" });
  };

  const handleChange = (e) => {
    setNewTodo({ id: Date.now(), title: e.target.value });
  };

  const handleDeleteClick = (e) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== +e.target.id;
      })
    );
  };

  const togglePopup = (e) => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSelectedTodo({
        id: +e.target.parentNode.firstChild.id,
        title: e.target.previousSibling.innerText,
      });
    }
  };

  const handleEditClick = (e) => {
    const newArray = todos;

    newArray.forEach((todo) => {
      if (todo.id === selectedTodo.id) {
        todo.title = selectedTodo.title;
      }
    });

    setTodos(newArray);
    setIsOpen(!isOpen);
  };

  const handleEditChange = (e) => {
    setSelectedTodo({ id: selectedTodo.id, title: e.target.value });
  };

  return (
    <div className="App">
      <TodosContext.Provider value={todos}>
        <NewTodosContext.Provider value={newTodo}>
          <IsOpenContext.Provider value={isOpen}>
            <SelectedTodoContext.Provider value={selectedTodo}>
              <HandleChangeContext.Provider value={handleChange}>
                <HandleSubmitContext.Provider value={handleSubmit}>
                  <HandleDeleteClickContext.Provider value={handleDeleteClick}>
                    <HandleEditClickContext.Provider value={handleEditClick}>
                      <TogglePopupContext.Provider value={togglePopup}>
                        <HandleEditChangeContext.Provider
                          value={handleEditChange}
                        >
                          <ToDoBox />
                        </HandleEditChangeContext.Provider>
                      </TogglePopupContext.Provider>
                    </HandleEditClickContext.Provider>
                  </HandleDeleteClickContext.Provider>
                </HandleSubmitContext.Provider>
              </HandleChangeContext.Provider>
            </SelectedTodoContext.Provider>
          </IsOpenContext.Provider>
        </NewTodosContext.Provider>
      </TodosContext.Provider>
    </div>
  );
}

export default App;
