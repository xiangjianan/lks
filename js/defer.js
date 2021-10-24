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

// 推荐网站
let $href = $('#recipient-name');
let $content = $('#message-text');
new Vue({
    el: '#send_msg',
    data() {
        return {
            send_flag: true,
        };
    },
    methods: {
        send() {
            let $send_msg = $('#send_msg');
            let href = $href.val().trim();
            let content = $content.val().trim();
            let href_length = href.length;
            let content_length = content.length;
            this.send_flag = true;
            if (!content && !href) {
                $href.val('');
                $content.val('');
                this.ele_message('请输入链接、网站简介', 'info');
            } else if (!href) {
                $href.val('');
                this.ele_message('请输入链接', 'info');
            } else if (!content) {
                $content.val('');
                this.ele_message('请输入网站简介', 'info');
            }
            if (href_length > 256) {
                this.ele_message('链接太长了，已超出256个字符的限制', 'warning');
            } else if (content_length > 256) {
                this.ele_message(`你一共写了${content_length}个字，已超出256个字符的限制`, 'warning');
            }
            if (this.send_flag) {
                $href.val('');
                $content.val('');
                $send_msg.attr('disabled', true);
                $send_msg.addClass('send_disabled');
                $.ajax({
                    type: "POST",
                    dataType: "text",
                    url: 'https://api.lks.helloxjn.com/api/web_reveive',
                    data: {
                        "href": href,
                        "content": content,
                    },
                    error: () => {
                        $send_msg.attr('disabled', false);
                        $send_msg.removeClass('send_disabled');
                        this.$notify({
                            title: '发送失败',
                            message: `服务器在摸鱼！`,
                            type: 'error',
                            center: true,
                        });
                    },
                    success: () => {
                        $send_msg.attr('disabled', false);
                        $send_msg.removeClass('send_disabled');
                        this.$notify({
                            title: '已发送',
                            message: `感谢分享 (゜-゜)つロ`,
                            type: 'success',
                            center: true,
                        });
                    }
                });
            }
        },
        ele_message(msg, type) {
            this.send_flag = false;
            $('.el-message__closeBtn').click();
            this.$message({
                message: msg,
                type: type,
                center: true,
                offset: -1,
                showClose: true,
            });
        },
    }
})
$href.keydown((e) => {
    if (e.keyCode === 13) {
        $content.focus();
        return false;
    }
});

// 日访问量统计接口
$.ajax({
    type: "POST",
    url: "https://www.helloxjn.com/log/",
    data: {
        'web': 'lks',
    },
});

// 控制台
console.log(`
GitHub: https://github.com/xiangjianan

Website: https://www.helloxjn.com

Email: xiang9872@gmail.com

`);

// bootstrap弹框配置（网站简介）
$('[data-toggle="popover"]').popover({
    container: 'body',
    content: '暂无简介',
    placement: 'top',
    trigger: 'hover',
});
