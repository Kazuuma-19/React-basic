//タスク追加機能
const onClickAdd = () => {
  //入力した値を取得
  const inputText = document.getElementById("add-text").value;
  //取得後、値を空にする
  document.getElementById("add-text").value = "";

  //divタグを生成
  const div = document.createElement("div");
  div.className = "list-row"

  //liタグ生成
  const li = document.createElement("li");
  //liタグの中に入力した値を設定
  li.innerText = inputText;

  //完了button生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  //完了ボタン機能
  completeButton.addEventListener("click", () => {
    //未完了から削除
    deleteFromIncompleteList(completeButton.parentNode);

    // //完了したTODOlistの親要素divを取得
    const addTarget = completeButton.parentNode;

    //Todoタスク名を取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //liタグ生成
    const li = document.createElement("li");
    //liタグの中に入力した値を設定
    li.innerText = text;

    //戻すボタン
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //divの配下に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //削除button生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  //delete button function
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンのdivを未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divの配下に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //ulの配下にdivを設定
  document.getElementById("incomplete-list").appendChild(div);

  console.log(deleteButton);
}

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
}

//add-buttonがクリックされたときに関数を実行
document
  .getElementById("add-button")
  .addEventListener("click", () =>
    onClickAdd()
  );