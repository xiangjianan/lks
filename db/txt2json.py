# coding: utf-8
import json

num = 7
hot_list = []

# 格式化txt
for i in range(1, num + 1):
    flag = True
    with open(f'./hot_{i}_out.txt', 'w') as fo:
        with open(f'./hot_{i}.txt', 'r') as f:
            for line in f:
                if len(line) < 3:
                    continue
                if '	' in line:
                    line = line.replace('	', ' ')
                line = line.replace(' http', '|http').replace('\n', '|').replace('  ', ' ')
                if not line.startswith('|http'):
                    if flag:
                        flag = False
                    else:
                        line = ''.join(['\n', line])
                else:
                    line = line.strip('|')
                fo.write(line)
            fo.write('|\n')

# txt转json
for i in range(1, num + 1):
    kind = f'hot_{i}'
    with open(f'./hot_{i}_out.txt', 'r') as f:
        for line in f:
            line_list = line.split('|')
            # print(line_list)
            for url in line_list[1:-1]:
                # print(url)
                hot_list.append({
                    'kind': kind,
                    'title': line_list[0],
                    'href': url.strip('\n'),
                })
with open(f'hot_list.json', 'w')as fp:
    json.dump(hot_list, fp)
