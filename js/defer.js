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
            let ip = '0.0.0.0';
            if (this.send_flag) {
                $send_msg.attr('disabled', true);
                $send_msg.addClass('send_disabled');
                $.ajax({
                    type: "POST",
                    dataType: "text",
                    url: 'https://api.lks.helloxjn.com/api/web_reveive',
                    data: {
                        "href": href,
                        "content": content,
                        "ip": ip,
                    },
                    error: (res) => {
                        $send_msg.attr('disabled', false);
                        $send_msg.removeClass('send_disabled');
                        if (res.status == 429) {
                            this.$notify({
                                title: '发送失败',
                                message: `发送频率过高，请稍后再试！`,
                                type: 'warning',
                                center: true,
                            });
                        } else {
                            this.$notify({
                                title: '发送失败',
                                message: `服务器在摸鱼！`,
                                type: 'error',
                                center: true,
                            });
                        }
                    },
                    success: (res) => {
                        $send_msg.attr('disabled', false);
                        $send_msg.removeClass('send_disabled');
                        res = $.parseJSON(res);
                        if (res.code == 1040) {
                            this.$notify({
                                title: '发送失败',
                                message: `你的请求已被过滤 (￣^￣)ゞ`,
                                type: 'error',
                                center: true,
                            });
                        } else if (res.code == 1000) {
                            $href.val('');
                            $content.val('');
                            this.$notify({
                                title: '已发送',
                                message: `感谢分享 (゜-゜)つロ`,
                                type: 'success',
                                center: true,
                            });
                        }
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

// 日访问量统计接口
setTimeout(() => {
    $.ajax({
        type: "POST",
        url: "https://api.lks.helloxjn.com/share/v1/log/",
        data: {
            'web': 'lks',
        },
    });
}, 2000);

// 免责声明
$('#Disclaimer .modal-body').html(`<p>*本网站由<a href="https://space.bilibili.com/125526/" rel="nofollow noreferrer" target="_blank">LKs</a>和<a href="https://github.com/xiangjianan/" rel="nofollow noreferrer" target="_blank">xiang9872</a>共同制作，展示的所有网站均为个人兴趣收集，不含任何商业推广成分，仅供交流学习。如有网站违反国家政策法规或链接已失效请联系(<a href="mailto:xiang9872@126.com">xiang9872@126.com</a>)，我们会尽快修改。</p>`)
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
