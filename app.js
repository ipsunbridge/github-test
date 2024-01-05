//要素を取得し、クリックしたら関数を呼ぶ。
$("#addTodo").click(function () {

  //要素を取得し、値を取得する
  const inputTodo = $("input").val();

  //ulタグに追加する
  $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");

  //挿入後は入力フォームを空にする
  $("input").val("");
});

//チェックを入れた時に斜線を引く
$(document).on("change", "input[type=checkbox]", function(){
  if($(this).is(":checked")){
    $(this).parent().css("text-decoration", "line-through");
  } else {
    $(this).parent().css("text-decoration", "none");    
  }
});
