# coding: utf-8
"""
解析原始网站数据
    web_*.txt   ==转换==>   web_list.json
"""
import json

num = 8
web_list = []

# 格式化web_*.txt，生成统一格式的临时文件 web_*_out.txt
for i in range(1, num + 1):
    with open(f'./web_{i}_out.txt', 'w') as fo:
        with open(f'./web_{i}.txt', 'r') as f:
            for line in f:
                if len(line) < 3:
                    continue
                # 减少空格
                if '	' in line:
                    line = line.replace('	', ' ')
                line = line.replace('    ', ' ').replace('   ', ' ').replace('  ', ' ')
                # 行尾去除空格
                if line[-2] == ' ':
                    line = line[:-2] + '\n'
                # 替换关键词
                line = line.replace(' http', '|http').replace(' 强推', '*$$$$').replace('（外）', " <span class='iconfont'>&#xe64b;</span>")
                # 处理多链接
                if line.count('|http') > 1:
                    line_list = line[:-1].split('|')
                    for ll in line_list[1:]:
                        fo.write(line_list[0] + '|' + ll + '\n')
                else:
                    fo.write(line)

# 逐个解析web_*_out.txt文本，生成一个JSON对象，此JSON对象存有完整的全期网站数据
for i in range(num, 0, -1):
    kind = f'web_{i}'
    with open(f'./web_{i}_out.txt', 'r') as f:
        for line in f:
            # 星标
            if '*$$$$' in line:
                line_list = line.strip('*$\n').split('|')
                url_list = line_list[1].split('{')
                web_list.append({
                    'kind': kind,
                    'title': line_list[0],
                    'href': url_list[0],
                    'slogan': url_list[1],
                    'kind_name': url_list[2].strip('\n'),
                    'star': 'star',
                })
            # 非星标
            else:
                line_list = line.split('|')
                url_list = line_list[1].split('{')
                web_list.append({
                    'kind': kind,
                    'title': line_list[0],
                    'href': url_list[0],
                    'slogan': url_list[1],
                    'kind_name': url_list[2].strip('\n'),
                    'star': None,
                })

# 生成web_list.json文件，做为本地数据库，可直在js代码中使用
with open(f'web_list.json', 'w')as fp:
    json.dump(web_list, fp)
