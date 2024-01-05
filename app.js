//要素を取得し、クリックしたら関数を呼ぶ。
$("#addTodo").click(function () {

  //要素を取得し、値を取得する
  const inputTodo = $("input").val();

  //ulタグに追加する
  $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");

  //挿入後は入力フォームを空にする
  $("input").val("");
});