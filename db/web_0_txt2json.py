# coding: utf-8
import json

num = 8
web_list = []

# 格式化txt
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
                line = line.replace(' 强推', '*star')
                line = line.replace('（外）', " <span class='iconfont'>&#xe64b;</span>")
                if line.count('|http') > 1:
                    line_list = line[:-1].split('|')
                    for ll in line_list[1:]:
                        fo.write(line_list[0] + '|' + ll + '\n')
                else:
                    fo.write(line)

# txt转json
for i in range(num, 0, -1):
    kind = f'web_{i}'
    with open(f'./web_{i}_out.txt', 'r') as f:
        for line in f:
            if '*star' in line:
                line_list = line.strip('*star\n').split('|')
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

with open(f'web_list.json', 'w')as fp:
    json.dump(web_list, fp)
