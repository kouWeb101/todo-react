import React from "react";

export const CompleteTodo = (props) => {
  const { todos, onClickBack } = props;
  return (
    <>
      <div className="complete-area">
        <p className="title">完了のTOOD</p>
        <ul id="complete-list">
          {todos.map((todo, index) => {
            return (
              <li key={todo}>
                <p>{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
