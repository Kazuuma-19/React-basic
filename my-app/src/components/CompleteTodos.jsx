import React from "react";

export const CompleteTodos = (props) => {
  //propsを分割代入
  const { todos, onClickBack } = props;

  return (
    <div className="complete-area">
      <p className="title">完了したTODO</p>

      <ul id="complete-list">
        {todos.map((todo, index) => {
          return (
            <div className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
