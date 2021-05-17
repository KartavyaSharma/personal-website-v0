import os
import shutil
import datetime
import re
import uuid
from sqlitedict import SqliteDict

def create_frontmatter():
    #---------DEFINING FRONTMATTER---------
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
    
    return [YAML_START, YAML_ID, YAML_TITLE, YAML_DATE, YAML_DESCRIPTION, YAML_THUMBNAIL, YAML_TAGS, YAML_END], ID


def workspace_to_txt():
    pre, ext = os.path.splitext(os.getcwd()+'\\workspace\\__workspace.md')
    os.rename(os.getcwd()+'\\workspace\\__workspace.md', pre + '.txt')
    
    
def workspace_to_md(ORIGINAL_EXT='.md'):
    pre, ext = os.path.splitext(os.getcwd()+'\\workspace\\__workspace.txt')
    os.rename(os.getcwd()+'\\workspace\\__workspace.txt', pre + ORIGINAL_EXT)
    
    
def temp_to_markdown(FILE_MARKDOWN_NAME):
    pre, ext = os.path.splitext(os.getcwd()+'\\workspace\\'+FILE_MARKDOWN_NAME+'.txt')
    os.rename(os.getcwd()+'\\workspace\\'+FILE_MARKDOWN_NAME+'.txt', pre + '.md')
    
    
def markdown_title_on_create(title):
    #DO NOT EDIT, removes all whitespaces and special characters from title
    NO_WHITE_SPACE = re.sub("\W+", "-", title)
    FILE_MARKDOWN_NAME = re.sub("[.,'?]", "", NO_WHITE_SPACE).lower()
    return FILE_MARKDOWN_NAME


def markdown_title_on_edit(identification):
    ID_RETRIEVE = SqliteDict('KEY_VALUE_STORE.sqlite', autocommit=True)
    FILE_MARKDOWN_NAME = ID_RETRIEVE[identification]
    ID_RETRIEVE.close()
    return FILE_MARKDOWN_NAME

def store_markdown_frontmatter_on_create(FILE_MARKDOWN_NAME, identification, frontmatter):
    store_file = open(os.getcwd()+'\\frontmatter_store\\frontmatter_'+identification+'.txt', 'w+')
    for frontmatter_var in frontmatter:
        store_file.write(frontmatter_var+'\n')
    ID_STORE = SqliteDict('KEY_VALUE_STORE.sqlite', autocommit=True)
    ID_STORE[identification] = FILE_MARKDOWN_NAME
    ID_STORE.close()
    store_file.close()


def write_frontmatter_to_file(create_flag, FILE_MARKDOWN_NAME=None, frontmatter=None):
    temp_file = None
    if create_flag == 'c':
        temp_file = open('workspace/'+FILE_MARKDOWN_NAME+'.txt', 'a')
        frontmatter_list = frontmatter
        for frontmatter_var in frontmatter_list:
            temp_file.write(frontmatter_var+'\n')
    elif create_flag == 'e':
        identification = input('Enter post ID: ')
        FILE_MARKDOWN_NAME = markdown_title_on_edit(identification)
        temp_file = open('workspace/'+FILE_MARKDOWN_NAME+'.txt', 'a')
        with open(os.getcwd()+"\\frontmatter_store\\frontmatter_"+identification+".txt", 'r+') as store_file:
            for line in store_file:
                temp_file.write(line)
                
    temp_file.close()
    
    return FILE_MARKDOWN_NAME if create_flag == 'e' else None
    

def write_markdown_to_file(FILE_MARKDOWN_NAME):
    temp_file = open('workspace/'+FILE_MARKDOWN_NAME+'.txt', 'a')
    with open(os.getcwd()+'\\workspace\\__workspace.txt') as file:
        lines = file.readlines()
        temp_file.writelines(lines)
    temp_file.close()
        
    
def main_script():
    
    CREATE_FLAG = input('Create / Edit [c/e]: ')
    
    workspace_to_txt()
    
    if CREATE_FLAG == 'c':
        
        frontmatter = create_frontmatter()
        frontmatter_title, frontmatter_id = frontmatter[0][2], frontmatter[1]
        
        FILE_MARKDOWN_NAME = markdown_title_on_create(frontmatter_title)
        
        write_frontmatter_to_file(CREATE_FLAG, FILE_MARKDOWN_NAME, frontmatter[0])
        store_markdown_frontmatter_on_create(FILE_MARKDOWN_NAME, frontmatter_id, frontmatter[0])
        write_markdown_to_file(FILE_MARKDOWN_NAME)
        
    elif CREATE_FLAG == 'e':
        FILE_MARKDOWN_NAME = write_frontmatter_to_file(CREATE_FLAG)
        write_markdown_to_file(FILE_MARKDOWN_NAME)
    else:
        print('Please enter valid option!')
        return 0
    
    workspace_to_md()
    
    temp_to_markdown(FILE_MARKDOWN_NAME)
    

main_script()


