//コンポーネントファイル
import React from "react";

const App = () => {
  const onClickButton = () => {
    alert();
  };
  const contentStyle = {
    color: "blue",
    fontSize: "18px",
  };

  return (
    //囲うだけ、意味無し
    <>
      <h1 style={{ color: "red" }}>hello</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

//他のファイルでつかうことを明示
export default App;
