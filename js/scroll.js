// 卡片动效
let $grid = $('.web-list').isotope({
  itemSelector: '.web-grid'
});
$('.web-menu').on('click', 'button', function () {
  $(this).addClass('active').siblings().removeClass('active');
  $grid.isotope({
    filter: $(this).attr('data-filter')
  });
});