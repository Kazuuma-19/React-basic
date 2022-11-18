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

  //button完了生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  //完了ボタン機能
  completeButton.addEventListener("click", () => {
    alert("complete");
  });

  //button削除生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  //delete button function
  deleteButton.addEventListener("click", () => {
    alert("delete");
  });

  //divの配下に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //ulの配下にdivを設定
  document.getElementById("incomplete-list").appendChild(div);

  console.log(deleteButton);
}


//add-buttonがクリックされたときに関数を実行
document
  .getElementById("add-button")
  .addEventListener("click", () =>
    onClickAdd()
  );