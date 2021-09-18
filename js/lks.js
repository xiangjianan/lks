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