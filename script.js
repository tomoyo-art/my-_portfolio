


$(function () {
    setTimeout('after()'); //アニメーションを実行
});
 
function after() {
    $('.fv_main').animate({
        marginTop: '-=10px'
    }, 800).animate({
        marginTop: '+=10px'
    }, 800);
    setTimeout('after()', 1600); //アニメーションを繰り返す間隔
}

$(function(){
    $(".inview").on("inview", function (event, isInView) {
      if (isInView) {
        $(this).stop().addClass("is-show");
      } else {
        $(this).stop().removeClass("is-show");
      }
    });
  });
