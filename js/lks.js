// 横幅提示
new Vue({
    el: '#lks',
    methods: {
        send() {
            $('.el-message__closeBtn').click();
            this.$message({
                message: '我推荐我自己 (゜-゜)つロ',
                type: 'info',
                center: true,
                showClose: true,
            });
        }
    }
})

// 日访问量统计接口
$.ajax({
    type: "POST",
    url: "https://www.helloxjn.com/log/",
    data: {
        'web': 'lks',
    },
});