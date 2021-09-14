# coding: utf-8
import json

num = 7
hot_list = []

# txt转json，20210914
for i in range(1, num + 1):
    kind = f'hot_{i}'
    with open(f'./hot_{i}_out_out.txt', 'r') as f:
        for line in f:
            line_list = line.split('|')
            hot_list.append({
                'kind': kind,
                'title': line_list[0],
                'href': line_list[1].strip('\n'),
            })

with open(f'hot_list.json', 'w')as fp:
    json.dump(hot_list, fp)
