//コンポーネントファイル
import React from "react";
import { useState } from "react";
import "./style.css";

export const App = () => {
  //state: 動的に変更する要素に利用。変数とそれを変更する関数を指定することができる。
  //const[value, fuction] = useState([初期値]);
  const [incompleteTodos, setIncompleteTodos] = useState(["aaaaa", "iiiii"]);

  return (
    <>
      <div className="input-area">
        <input id="add-text" type="text" placeholder="TODOを入力" />
        <button id="add-button">追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>

        <ul id="incomplete-list">
          {incompleteTodos.map((todo) => {
            return (
              <div className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了したTODO</p>

        <ul id="complete-list">
          <div className="list-row">
            <li>あふぁｄｆ</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
