import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { ImcompleteTodo } from "./components/ImcompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [imcompleteTodos, setImcompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...imcompleteTodos, todoText];
    setImcompleteTodos(newTodos);
    setTodoText("");
  };
  const onCLickComplete = (index) => {
    const newImcompleteTodos = [...imcompleteTodos];
    newImcompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, imcompleteTodos[index]];
    setImcompleteTodos(newImcompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickDelete = (index) => {
    const newTodos = [...imcompleteTodos];
    newTodos.splice(index, 1);
    setImcompleteTodos(newTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTods = [...completeTodos];
    newCompleteTods.splice(index, 1);
    const newImcompleteTodos = [...imcompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTods);
    setImcompleteTodos(newImcompleteTodos);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={imcompleteTodos.length >= 5}
      />
      {imcompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるtodoは5個までです。消化しましょう。
        </p>
      )}
      <ImcompleteTodo
        todos={imcompleteTodos}
        onClickComplete={onCLickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
