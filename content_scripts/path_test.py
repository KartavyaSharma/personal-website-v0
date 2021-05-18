# -*- coding: utf-8 -*-
"""
Created on Tue May 18 11:14:25 2021

@author: Kartavya Sharma
"""

import json
import os

with open(os.getcwd()+"\\workspace\\test.json") as json_file:
    file_content = json.load(json_file)