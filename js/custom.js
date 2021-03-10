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
// 视频链接
let video_list = [
  ['B站博主',' -LKs- 良心到难以置信的网站推荐','https://space.bilibili.com/125526'],
  ['第一期 av3743771','https://www.bilibili.com/video/av3743771/'],
  ['第二期 av9856372','https://www.bilibili.com/video/av9856372/'],
  ['第三期 av27234784','https://www.bilibili.com/video/av27234784/'],
  ['第四期 av66209341','https://www.bilibili.com/video/av66209341/'],
  ['第五期 BV1a741137NS','https://www.bilibili.com/video/BV1a741137NS/'],
  ['第六期 BV1wv411y7L6','https://www.bilibili.com/video/BV1wv411y7L6/'],
  ['第七期 BV1bU4y1x7A1','https://www.bilibili.com/video/BV1bU4y1x7A1/'],
]
$('button').click(function (event) {
  let num = $(this).attr('num');
  console.log(num);
  if (num === '0'){
    $('.group-video').html(`B站博主<a href="https://space.bilibili.com/125526?spm_id_from=333.788.b_765f7570696e666f.1" target="_blank"> -LKs- </a>良心到难以置信的网站推荐`);
  }else{
    $('.group-video').html(`视频传送门：<a href="${video_list[Number(num)][1]}" target="_blank">${video_list[Number(num)][0]}</a>`);
  }
})