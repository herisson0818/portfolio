// PhotoSwipe
initPhotoSwipeFromDOM(".js-my-gallery");

$(function () {

  //iOS対策
  //iOSでは疑似要素を含むaタグのリンクは２回タップしないと遷移とページ内スクロールをしないため、
  //ユーザーエージェント判定でiOSの場合はbodyタグにiosを付与し、対象の疑似要素をdisplay: noneする
  var ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/.test(ua)) {
    $("body").addClass("ios");
  }

  //Worksのリンクを有効化
  //スライド（Swiper）内に記載のリンクを有効にするため下記の記述が必要 (;´･ω･)ｳｰﾝ･･･
  $(".works-url").on("click", "a", function (e) {
    e.stopPropagation();
  });

  //ページ内スクロール
  var $nav = $(".gnav");
  var navHeight = $nav.outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      300,
      "swing"
    );
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });
});

//var countdown = function(due) {
//	var now = new Date();

//	var rest = due.getTime() - now.getTime();
//	var sec = Math.floor(rest / 1000 % 60);
//	var min = Math.floor(rest / 1000 / 60) % 60;
//	var hours = Math.floor(rest /1000 / 60 /60) % 24;
//	var days = Math.floor(rest / 1000 / 60 / 60 / 24);
//	var count = [days, hours, min, sec];

//	return count;
//}

//var goal = new Date(2021, 1, 1);
//goal.setHours(23);
//goal.setMinutes(59)
//goal.setSeconds(59);

// var recalc = function() {
//	var counter = countdown(goal);
//	document.getElementById('day').textContent = counter[0];
//	document.getElementById('hour').textContent = counter[1];
//	document.getElementById('min').textContent = counter[2];
//	document.getElementById('sec').textContent = counter[3];
//	refresh();
//}

//var refresh = function() {
//	setTimeout(recalc, 1000);
//}
//recalc();

document.getElementById('form').select.onchange = function() {
  location.href = document.getElementById('form').select.value;
}
