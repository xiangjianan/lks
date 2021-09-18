# coding: utf-8
"""
将每一期网站数据
    由txt文本格式 ==转换成==> JSON格式
    JSON格式的数据可直接在js代码中使用
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
                if '	' in line:
                    line = line.replace('	', ' ')
                line = line.replace('    ', ' ').replace('   ', ' ').replace('  ', ' ')
                if line[-2] == ' ':
                    line = line[:-2] + '\n'
                line = line.replace(' http', '|http')
                line = line.replace(' 强推', '*$$$$')
                line = line.replace('（外）', " <span class='iconfont'>&#xe64b;</span>")
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
            if '*$$$$' in line:
                line_list = line.strip('*$\n').split('|')
                web_list.append({
                    'kind': kind,
                    'title': line_list[0],
                    'href': line_list[1],
                    'star': 'star',
                })
            else:
                line_list = line.split('|')
                web_list.append({
                    'kind': kind,
                    'title': line_list[0],
                    'href': line_list[1].strip('\n'),
                    'star': None,
                })

# 生成web_list.json文件，即本地数据库，内容可直接拷贝到js代码中
with open(f'web_list.json', 'w')as fp:
    json.dump(web_list, fp)
