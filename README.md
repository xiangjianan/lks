# LKs 网站推荐合集

> B站博主 [LKs](https://space.bilibili.com/125526?spm_id_from=333.788.b_765f7570696e666f.1)《良心到难以置信的网站推荐》系列视频的网站推荐合集

[在线预览](https://xiangjianan.github.io/lks) · [B站主页](https://space.bilibili.com/125526/) · [开源代码](https://github.com/xiangjianan/lks)

## 项目简介

本项目是一个静态网站，整理并展示了B站UP主 LKs 在《良心到难以置信的网站推荐》系列视频中推荐的所有优质网站。网站支持按期数、分类筛选，以及关键词搜索功能，方便用户快速找到感兴趣的网站。

**当前收录：** 第1期至第12期，共 **303** 个网站

## 功能特性

- 📚 **多期展示**：收录第1期至第12期的所有推荐网站
- 🔍 **关键词搜索**：支持通过关键词快速搜索网站
- 🏷️ **分类筛选**：按实用、学习、工具、艺术、生活、娱乐、视频、音乐、图片、游戏等分类筛选
- ⭐ **收藏功能**：支持标记和查看收藏的网站
- 📱 **响应式设计**：完美适配桌面端和移动端
- 🎨 **精美界面**：基于 Bootstrap 4.6.1 构建的现代化UI设计
- 💾 **本地缓存**：使用 localStorage 缓存数据，离线也可访问

## 技术栈

- **前端框架**：Bootstrap 4.6.1
- **JavaScript 库**：jQuery 3.6.0
- **布局库**：Isotope.js（筛选排序）
- **图标库**：iconfont 2.0.1
- **数据存储**：JSON 格式（web.v12.2.json）

## 项目结构

```
lks/
├── index.html                 # 主页面
├── favicon.ico               # 网站图标
├── README.md                 # 项目说明文档
├── LICENSE                   # MIT许可证
├── .gitignore               # Git 忽略文件配置
├── .github/
│   └── ISSUE_TEMPLATE/      # Issue 模板
│       ├── 新功能建议.md
│       └── 网站失效.md
└── static/                  # 静态资源目录
    ├── bootstrap-4.6.1/    # Bootstrap 框架文件
    ├── jquery-3.6.0/       # jQuery 库文件
    ├── iconfont-2.0.1/     # 图标字体文件
    └── site/               # 网站自定义资源
        ├── css/            # 自定义样式文件
        ├── js/             # JavaScript 文件
        │   ├── index.2.2.4.js      # 主逻辑
        │   ├── defer.2.2.3.js      # 延迟加载
        │   └── web.v12.2.json      # 网站数据文件
        └── img/            # 图片资源
```

## 快速开始

### 本地运行

1. 克隆项目到本地

```bash
git clone https://github.com/xiangjianan/lks.git
cd lks
```

1. 直接在浏览器中打开 `index.html` 文件，或使用本地服务器

### 使用本地服务器（推荐）

使用 Python 启动简单HTTP服务器：

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

然后在浏览器中访问 `http://localhost:8000`

## 数据格式

网站数据存储在 `static/site/js/web.v12.2.json` 文件中，每个网站包含以下字段：

```json
{
  "kind": "web_12",           // 所属期数
  "id": 1,                    // 网站ID
  "title": "网站名称",         // 网站标题
  "href": "https://example.com",  // 网站链接
  "slogan": "网站简介",       // 网站描述
  "kind_name": "分类名称",     // 分类标签
  "star": "star",             // 是否收藏（可选）
  "icon": ""                  // 图标（可选）
}
```

## 贡献指南

欢迎贡献代码、报告问题或提出建议！

### 报告网站失效

如果你发现某个推荐网站已经失效，请使用 [网站失效模板](.github/ISSUE_TEMPLATE/网站失效.md) 提交 Issue。

### 提出新功能建议

如果你有新的功能想法，请使用 [新功能建议模板](.github/ISSUE_TEMPLATE/新功能建议.md) 提交 Issue。

### 提交代码

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

### 添加新网站

1. 编辑 `static/site/js/web.v12.2.json` 文件
2. 按照数据格式添加新的网站信息
3. 确保 `kind` 字段对应正确的期数（如第12期为 `web_12`）
4. 提交 Pull Request

## 版本历史

- **V0.12.0.0** - 第12期网站推荐
- **V0.11.0.0** - 第11期网站推荐
- **V0.10.0.0** - 第10期网站推荐
- 更多版本信息请查看 [Tags](https://github.com/xiangjianan/lks/tags)

## 免责声明

本项目仅作为 LKs 视频中推荐网站的整理和展示，所有推荐网站的内容和版权均归其原作者所有。如发现网站内容不当或失效，请通过 Issue 反馈，我们将及时处理。

## 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 致谢

- 感谢 [LKs](https://space.bilibili.com/125526/) 制作了如此精彩的网站推荐视频
- 感谢所有贡献者和反馈者的支持

## 联系方式

- 项目主页：<https://github.com/xiangjianan/lks>
- 在线预览：<https://xiangjianan.github.io/lks>
- 作者：[xiangjianan](https://github.com/xiangjianan)

***

Copyright © 2022 [LKs](https://space.bilibili.com/125526/) & [xiangjianan](https://github.com/xiangjianan)
