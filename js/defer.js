// 搜索功能
new Vue({
    el: '#submit',
    methods: {
        search_send() {
            let $search = $('#search');
            let inp = $search.val().trim();
            if (inp) {
                $('.web-menu button').eq(0).addClass('active').siblings().removeClass('active');
                $('.group-video').html(`B站博主<a href="https://space.bilibili.com/125526/" target="_blank"> -LKs- </a>《良心到难以置信的网站推荐》`);
                if ($('.bilibili_iframe').css('display') === 'block') {
                    $('.bilibili_iframe').css('display', 'none');
                    $('iframe').attr('src', '');
                }
                $('.web-list .web-grid').each(function () {
                    if (($(this).find('.web-single h2').text() + $(this).find('.web-single p').text()).toUpperCase().search(inp.toUpperCase()) != -1 || $(this).find('.web-single').attr('data-content').toUpperCase().search(inp.toUpperCase()) != -1) {
                        $(this).addClass('filter_web');
                    }
                });
                $('.web-list').isotope({
                    itemSelector: '.web-grid',
                    filter: '.filter_web',
                });
                setTimeout(() => {
                    set_footer();
                    $('.web-list .web-grid').removeClass('filter_web');
                }, 10);
            } else {
                $('.el-message__closeBtn').click();
                this.$message({
                    message: '请输入关键词',
                    type: 'info',
                    center: true,
                    offset: -1,
                    showClose: true,
                });
            }
            $search.val('');
        },
    }
})
$('#search').keydown((e) => {
    if (e.keyCode === 13) {
        $('#submit').click();
    }
});

// 首次获取点赞数
$.ajax({
    type: "POST",
    dataType: "text",
    url: 'https://lkszj.info/api/get_like_num',
    error: (res) => {
    },
    success: (res) => {
        like_num_dic = $.parseJSON(res);
        $('.web-list').find('.web-grid').each(function name(params) {
            let like_num_id = $(this).attr('id');
            let like_num = like_num_dic[like_num_id] ? like_num_dic[like_num_id] : 0;
            $(this).find('.like-num').text(like_num);
            let data_content = $(this).find('div').attr('data-content');
            data_content = data_content.replace('>0<', `>${like_num}<`);
            $(this).find('div').attr('data-content', data_content);
            $grid.isotope('updateSortData', $grid.children());
        });
    }
});

// 热度排序
localStorage.setItem('is_sort_like_num', 1);
$('#scroll-to-hot').click(function name(params) {
    if (localStorage.getItem('is_sort_like_num') == 1) {
        $grid.isotope({
            sortBy: 'like-num-sort',
            sortAscending: false,
        });
        localStorage.setItem('is_sort_like_num', 0);
    } else {
        $grid.isotope({
            sortBy: 'original-order',
            sortAscending: true,
        });
        localStorage.setItem('is_sort_like_num', 1);
    }
});

// web端跳转
$('.web-grid-web mya').click(function name(params) {
    window.open($(this).attr('href'));
    return false;
});
// web端点赞
$('.web-grid-web mya p>.iconfont').click(function name(event) {
    console.log('点赞');
    $(this).css('font-size', '20px');
    $(this).css('bottom', '-4px');
    $(this).css('right', '-4px');
    setTimeout(() => {
        $(this).css('font-size', '16px');
        $(this).css('bottom', '-2px');
        $(this).css('right', '-2px');
    }, 300);
    let $this = $(this).parent().parent().parent().parent();
    let $web_grid_web_mya_div = $(this).parent().parent();
    let web_grid = $this.attr('id');
    if (localStorage.getItem(web_grid) == 'like_flag') {
        console.log('已赞');
    } else {
        let like_num_after = parseInt($this.find('p>.like-num').text()) + 1;
        console.log(like_num_after);
        $this.find('p>.like-num').text(like_num_after);
        $('.popover-body span.like-num').text(like_num_after);
        $this.find('p>.like-num').addClass('like_flag');
        $this.find('p>.iconfont').addClass('like_flag');
        $('.popover-body span').addClass('like_flag');
        let s = $('.popover-body span.like-num').text(like_num_after);
        let web_grid_web_mya_div = $web_grid_web_mya_div.attr('data-content');
        web_grid_web_mya_div = web_grid_web_mya_div.replace(/null/g, 'like_flag');
        let web_grid_history = web_grid_web_mya_div.split('</span>')[1].split('>')[1];
        web_grid_web_mya_div = web_grid_web_mya_div.replace(web_grid_history + '<', like_num_after + '<');
        $web_grid_web_mya_div.attr('data-content', web_grid_web_mya_div);
        localStorage.setItem(web_grid, 'like_flag');
        // 更新排序数据
        $grid.isotope('updateSortData', $grid.children());
        $.ajax({
            type: "POST",
            url: 'https://lkszj.info/api/set_like_num',
            data: {
                'web_grid': web_grid,
            },
            error: (res) => {
            },
            success: (res) => {
            }
        });
    }
    event.stopPropagation();
});
// 移动端点赞
$('.phone-modal .hide-modal').click(function name(params) {
    let $this = $(this);
    let web_grid = $this.attr('web_grid');
    let $web_grid = $(`#${web_grid}`);
    console.log(web_grid);
    if (localStorage.getItem(web_grid) == 'like_flag') {
        console.log('已赞');
    } else {
        let like_num_after = parseInt($web_grid.find('p>.like-num').text()) + 1;
        $web_grid.find('p>.like-num').text(like_num_after);
        $web_grid.find('p>.like-num').addClass('like_flag');
        $web_grid.find('p>.iconfont').addClass('like_flag');
        $('.phone-modal').find('.iconfont').addClass('like_flag');
        $('.phone-modal').find('.like-num').addClass('like_flag');
        $('.phone-modal').find('.like-num').text(like_num_after);
        localStorage.setItem(web_grid, 'like_flag');
        // 更新排序数据
        $grid.isotope('updateSortData', $grid.children());
        $.ajax({
            type: "POST",
            url: 'https://lkszj.info/api/set_like_num',
            data: {
                'web_grid': web_grid,
            },
            error: (res) => {
            },
            success: (res) => {
            }
        });
    }
});

// 控制台
console.log(`
GitHub: https://github.com/xiangjianan

Website: https://www.helloxjn.com

Email: xiang9872@126.com

`);

// bootstrap弹框配置（网站简介）
$('[data-toggle="popover"]').popover({
    container: 'body',
    content: '暂无简介',
    placement: 'top',
    trigger: 'hover',
});

// 免责声明
$('#Disclaimer .modal-body').html(`<p>*本网站由<a href="https://space.bilibili.com/125526/" rel="nofollow noreferrer" target="_blank">LKs</a>和<a href="https://github.com/xiangjianan/" rel="nofollow noreferrer" target="_blank">xjn</a>共同制作，展示的所有网站均为个人兴趣收集，不含任何商业推广成分，仅供交流学习。如有网站违反国家政策法规或链接已失效请联系(<a href="mailto:xiang9872@126.com">xiang9872@126.com</a>)，我们会尽快修改。</p>`)
if (!localStorage.getItem('is_show_disclaimer')) {
    localStorage.setItem('is_show_disclaimer', 1);
}
if (localStorage.getItem('is_show_disclaimer') == 1) {
    setTimeout(() => {
        $('#clickDisclaimer').click();
    }, 300);
}
$('#DisclaimerClose').click(() => {
    localStorage.setItem('is_show_disclaimer', 0);
});
