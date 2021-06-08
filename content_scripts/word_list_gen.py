# -*- coding: utf-8 -*-
"""
Created on Sun Jun  6 22:19:47 2021

@author: Kartavya Sharma
"""

import os

with open(os.getcwd() + "\\nounlist.txt") as noun_list:
    with open(os.getcwd() + "\\content.txt") as content:
        temp = {}
        accept = ['calculator', 'body', 'health', 'activity', 'exercise', 'thermic', 'thermogenesis',
                  'basal', 'metabolic', 'mifflin', 'st-jeor', 'equation', 'harris', 'benedict', 'katch',
                  'mcardle', 'bmr', 'lean', 'sedentary', 'active', 'calculation', 'calculate', 'energy',
                  'food']
        for line in content:
            for word in line.split(' '):
                if(word.lower() in noun_list or word.lower() in accept):
                    temp.add(word)
        print(temp)