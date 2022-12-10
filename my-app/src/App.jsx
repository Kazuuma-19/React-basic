//コンポーネントファイル
import React from "react";
import { useState } from "react";
import "./style.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  //const[value, fuction] = useState([初期値]);
  //state: 動的に変更する要素に利用。変数とそれを変更する関数を指定することができる。
  //入力欄
  const [todoText, setTodoText] = useState("");
  //未完了
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  //完了
  const [completeTodos, setCompleteTodos] = useState([]);

  //入力テキストを変更可能にする
  const onChangeTodoText = (event) => {
    //入力テキストのvalueをsetTodoTextの引数として取得
    setTodoText(event.target.value);
  };

  //追加ボタンを押した際
  const onClickAdd = () => {
    //空文字の際に動かないようにする
    if (todoText === "") return;
    //incompleteTodoの後ろにtodoTextを追加
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    //入力後空にする
    setTodoText("");
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

    //完了リストに追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  //戻すボタン
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        //条件にあうときにtrue判定となる
        disabled={incompleteTodos.length >= 5}
      />

      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red", fontWeight: "bold" }}>
          登録できるtodoは5個までだよ、消化しろ！！
        </p>
      )}

      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
