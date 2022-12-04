//コンポーネントファイル
import React from "react";
import { useState } from "react";
import "./style.css";

export const App = () => {
  //const[value, fuction] = useState([初期値]);
  //state: 動的に変更する要素に利用。変数とそれを変更する関数を指定することができる。
  //入力欄
  const [todoText, setTodoText] = useState("");
  //未完了
  const [incompleteTodos, setIncompleteTodos] = useState(["aaaaa", "iiiii"]);
  //完了
  const [completeTodos, setCompleteTodos] = useState(["uuuuuu"]);

  //入力テキストを変更可能にする
  const onChangeTodoText = (event) => {
    //空文字の際に動かないようにする
    if (todoText === "") return;
    //入力テキストのvalueをsetTodoTextの引数として取得
    setTodoText(event.target.value);
    //入力後空にする
    setTodoText("");
  };

  //追加ボタンを押した際
  const onClickAdd = () => {
    //incompleteTodoの後ろにtodoTextを追加
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
  };
  //削除ボタン
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    //1.何番目？ 2.何個？
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  //完了
  const onClickComplete = (index) => {
    // 未完了リストから削除;
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    // //完了リストに追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          id="add-text"
          type="text"
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button id="add-button" onClick={onClickAdd}>
          追加
        </button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul id="incomplete-list">
          {incompleteTodos.map((todo, index) => {
            //2つの目の引数に順番をとる
            return (
              //key:ループ要素の一番親につける
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了したTODO</p>

        <ul id="complete-list">
          {completeTodos.map((todo) => {
            return (
              <div className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
