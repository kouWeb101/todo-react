import React from "react";

export const ImcompleteTodo = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <>
      <div className="imcomplete-area">
        <p className="title">未完了のTOOD</p>
        <ul id="imcomplete-list">
          {todos.map((todo, index) => {
            return (
              <li key={todo}>
                <p>{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
