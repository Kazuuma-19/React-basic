import React from "react";

const style = {
  background: "#c1ffff",

  width: "400px",
  height: "30px",

  padding: "8px",
  margin: "8px",

  borderRadius: "8px",
};

export const InputTodo = (props) => {
  //propsを分割代入
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} id="add-button" onClick={onClick}>
        追加
      </button>
    </div>
  );
};
