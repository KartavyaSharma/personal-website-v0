'''
A script I use to create and edit blog posts. Foresty as a CMS has been replaced as of this writing.
'''

import os
import shutil
import datetime
import re
import uuid
from sqlitedict import SqliteDict

def move_to_repo(file_name):
    None

def main_script():
    
    CREATE_FLAG = input('Create / Edit [c/e]: ')
    
    if CREATE_FLAG == 'c':
        #---------FRONTMATTER---------
        TITLE = input('ENTER POST TITLE: ')
        DESCRIPTION = input('ENTER POST DESCRIPTION: ')
        
        TAGS = []
        number_of_tags = int(input('ENTER NO. OF TAGS: '))
        
        for i in range(0, number_of_tags):
            tag = input()
            TAGS.append(tag)
        
        DATE = datetime.datetime.now().astimezone().isoformat()
        THUMBNAIL = input('PASTE IMAGE FILE NAME: ')
        
        #unique identification for frontmatter store
        ID = str(uuid.uuid4())
        #------------------------------
        
        #DO NOT EDIT, removes all whitespaces and special characters from title
        NO_WHITE_SPACE = re.sub("\W+", "-", TITLE)
        FILE_MARKDOWN_NAME = re.sub("[.,'?]", "", NO_WHITE_SPACE).lower()
        
        #---------ADDING YAML FRONTMATTER---------
        
        YAML_START, YAML_END = "---", "---"
        YAML_TITLE = "title: "+TITLE
        YAML_DATE = "date: "+DATE
        YAML_DESCRIPTION = "description: "+DESCRIPTION
        YAML_THUMBNAIL_PATH = '../images/'+THUMBNAIL
        YAML_THUMBNAIL = "thumbnail: "+'"'+YAML_THUMBNAIL_PATH+'"'
        YAML_TAGS = "tags:"+'\n'
        YAML_ID = "id: "+ID
        
        for i in range(0, number_of_tags):
            YAML_TAGS += "- "+TAGS[i]+'\n'
            
        #-----------------------------------------
    
        temp_file = open('workspace/'+FILE_MARKDOWN_NAME+'.txt', 'a')    
        store_file = open(os.getcwd()+'\\frontmatter_store\\frontmatter_'+ID+'.txt', 'w+')    
    
        for FRONTMATTER_VARIABLE in [YAML_START, YAML_ID, YAML_TITLE, YAML_DATE, YAML_DESCRIPTION, YAML_THUMBNAIL, YAML_TAGS, YAML_END]:
            store_file.write(FRONTMATTER_VARIABLE+'\n')
            temp_file.write(FRONTMATTER_VARIABLE+'\n')
            
        ID_STORE = SqliteDict('KEY_VALUE_STORE.sqlite', autocommit=True)
        ID_STORE[ID] = FILE_MARKDOWN_NAME
        ID_STORE.close()
        store_file.close()
        
    elif CREATE_FLAG == 'e':
        
        ID = input('Enter post ID: ')
        
        ID_RETRIEVE = SqliteDict('KEY_VALUE_STORE.sqlite', autocommit=True)
        FILE_MARKDOWN_NAME = ID_RETRIEVE[ID]
        ID_RETRIEVE.close()
        
        temp_file = open('workspace/'+FILE_MARKDOWN_NAME+'.txt', 'a')    
        
        with open(os.getcwd()+"\\frontmatter_store\\frontmatter_"+ID+".txt", 'r+') as store_file:
            for line in store_file:
                temp_file.write(line)
                
    else:
        print('Please enter valid option!')
        return 0
    
    ORIGINAL_EXT = '.md'
    
    pre, ext = os.path.splitext(os.getcwd()+'\\workspace\\__workspace.md')
    os.rename(os.getcwd()+'\\workspace\\__workspace.md', pre + '.txt')
    
    with open(os.getcwd()+'\\workspace\\__workspace.txt') as file:
        lines = file.readlines()
        temp_file.writelines(lines)
        
    pre, ext = os.path.splitext(os.getcwd()+'\\workspace\\__workspace.txt')
    os.rename(os.getcwd()+'\\workspace\\__workspace.txt', pre + ORIGINAL_EXT)
    
    temp_file.close()
    
    if CREATE_FLAG == 'e':
        os.remove(os.getcwd()+'\\workspace\\'+FILE_MARKDOWN_NAME+'.md')
    
    pre, ext = os.path.splitext(os.getcwd()+'\\workspace\\'+FILE_MARKDOWN_NAME+'.txt')
    os.rename(os.getcwd()+'\\workspace\\'+FILE_MARKDOWN_NAME+'.txt', pre + '.md')
    

main_script()