let $mainNav = $("#mainNav");
let $body = $("body");
let $scroll_to_top = $("#scroll-to-top");
// 导航栏自动隐藏
let previousTop = 0;
$(window).scroll(function () {
  let currentTop = $(window).scrollTop();
  if (currentTop - previousTop < -10) {
    // 下划
    $scroll_to_top.addClass('show');
    previousTop = currentTop;
  } else if (currentTop - previousTop > 10) {
    // 上划
    $scroll_to_top.removeClass('show');
    $('.navbar-collapse').collapse('hide');
    previousTop = currentTop;
  }
  if (currentTop < 60) {
    // 首页常显示
    $scroll_to_top.removeClass('show');
  }
});
// 底部滚动
if ($scroll_to_top.length) {
  $scroll_to_top.on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 700);
  });
}
// 控制台
console.log(`
GitHub: https://github.com/xiangjianan

Email: xiang9872@gmail.com

Page: www.helloxjn.com

`);