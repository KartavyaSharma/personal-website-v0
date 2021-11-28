import os
import shutil
import datetime
import re
import uuid
from sqlitedict import SqliteDict
import subprocess

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
    THUMBNAIL = "default.png" if THUMBNAIL == "" else THUMBNAIL
    
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
    
    return [YAML_START, YAML_ID, YAML_TITLE, YAML_DATE, YAML_DESCRIPTION, YAML_THUMBNAIL, YAML_TAGS, YAML_END], ID, TITLE, THUMBNAIL


def workspace_to_txt():
    pre, ext = os.path.splitext(os.getcwd()+'\\workspace\\__workspace.md')
    os.rename(os.getcwd()+'\\workspace\\__workspace.md', pre + '.txt')
    
    
def workspace_to_md(ORIGINAL_EXT='.md'):
    pre, ext = os.path.splitext(os.getcwd()+'\\workspace\\__workspace.txt')
    os.rename(os.getcwd()+'\\workspace\\__workspace.txt', pre + ORIGINAL_EXT)
    
    
def temp_to_markdown(file_markdown_name):
    pre, ext = os.path.splitext(os.getcwd()+'\\workspace\\'+file_markdown_name+'.txt')
    try:
        os.rename(os.getcwd()+'\\workspace\\'+file_markdown_name+'.txt', pre + '.md')
    except FileExistsError:
        overwrite_flag = input("File already exists, do you want to overwrite it and try again? [y/n]: ")
        if overwrite_flag == 'y':
            try:
                os.remove(os.getcwd()+'\\workspace\\'+file_markdown_name+'.txt', pre + '.md')
            except:
                raise Exception('File overwrite failed, aborting...')
            os.rename(os.getcwd()+'\\workspace\\'+file_markdown_name+'.txt', pre + '.md')
            print('Previous file has been overwritten!')
        else:
            raise Exception('File overwrite aborted, files cannot have the same name!')
    
    
def markdown_title_on_create(title):
    #DO NOT EDIT, removes all whitespaces and special characters from title
    NO_WHITE_SPACE = re.sub("\W+", "-", title)
    file_markdown_name = re.sub("[.,'?]", "", NO_WHITE_SPACE).lower()
    return file_markdown_name


def markdown_title_on_edit(identification):
    ID_RETRIEVE = SqliteDict('KEY_VALUE_STORE.sqlite', autocommit=True)
    file_markdown_name = ID_RETRIEVE[identification]
    ID_RETRIEVE.close()
    return file_markdown_name

def store_markdown_frontmatter_on_create(file_markdown_name, identification, frontmatter):
    store_file = open(os.getcwd()+'\\frontmatter_store\\frontmatter_'+identification+'.txt', 'w+')
    for frontmatter_var in frontmatter:
        store_file.write(frontmatter_var+'\n')
    ID_STORE = SqliteDict('KEY_VALUE_STORE.sqlite', autocommit=True)
    ID_STORE[identification] = file_markdown_name
    ID_STORE.close()
    store_file.close()


def write_frontmatter_to_file(create_flag, file_markdown_name=None, frontmatter=None):
    temp_file = None
    if create_flag == 'c':
        temp_file = open('workspace/'+file_markdown_name+'.txt', 'a')
        frontmatter_list = frontmatter
        for frontmatter_var in frontmatter_list:
            temp_file.write(frontmatter_var+'\n')
    elif create_flag == 'e':
        identification = input('Enter post ID: ')
        file_markdown_name = markdown_title_on_edit(identification)
        temp_file = open('workspace/'+file_markdown_name+'.txt', 'a')
        with open(os.getcwd()+"\\frontmatter_store\\frontmatter_"+identification+".txt", 'r+') as store_file:
            for line in store_file:
                temp_file.write(line)
                
    temp_file.close()
    
    return file_markdown_name if create_flag == 'e' else None
    

def write_markdown_to_file(file_markdown_name):
    temp_file = open('workspace/'+file_markdown_name+'.txt', 'a')
    with open(os.getcwd()+'\\workspace\\__workspace.txt') as file:
        lines = file.readlines()
        temp_file.writelines(lines)
    temp_file.close()

    
def move_to_posts(create_flag, file_markdown_name):
    source = os.path.dirname(os.getcwd())+"\\content_scripts\\workspace\\"+file_markdown_name+".md"
    destination = os.path.dirname(os.getcwd())+"\\content_scripts\\posts"
    if create_flag == 'c':
        shutil.move(source, destination)
    elif create_flag == 'e':
        destination += "\\"+file_markdown_name+".md"
        os.replace(source, destination)
    print("Success!")
        

def git_operations():
    commit_desc = input("Enter commit description: ")
    standard_git_push = [
            ["git", "add", "."],
            ["git", "commit", "-m", commit_desc],
            ["git", "push"],
        ]
    
    for git_op in standard_git_push:
        try:
            subprocess.run(git_op, shell=True, cwd=os.path.dirname(os.getcwd()))
        except subprocess.CalledProcessError as error:
            print("Error: ", error.output)
            git_pull_flag = input("Can this be resolved using 'git pull'? [y/n]: ")
            if git_pull_flag == 'y':
                try:
                    subprocess.run(["git", "pull"], shell=True, cwd=os.path.dirname(os.getcwd()))
                except subprocess.CalledProcessError as error:
                    print("'git pull' failed with error: ", error.output, "aborting process...")
                    return 0
            elif git_pull_flag == 'n':
                print("Since no easy fix exists, aborting process...")
                return 0
    print("Success!")
    
    
def push_image_to_repo(image_name):
     source = os.getcwd()+"\\workspace\\"+image_name
     destination = os.path.dirname(os.getcwd())+"\\src\\content\\images"
     print("Moving file to repo image dir...")
     shutil.move(source, destination)
     print("Success!")

    
def push_to_repo(identification):
    file_markdown_name = markdown_title_on_edit(identification)
    source = os.path.dirname(os.getcwd())+"\\content_scripts\\posts\\"+file_markdown_name+".md"
    destination = os.path.dirname(os.getcwd())+"\\src\\content\\posts"
    try:
        print("Adding file to posts repo in website src...")
        shutil.copy(source, destination)
        print("Success!")
    except:
        print("Seems like you are trying to push and edit for "+file_markdown_name+". Removing existing version...")
        os.remove(source, destination+"\\"+file_markdown_name+".md")
        shutil.copy(source, destination)
    git_flag = input("Do you want to push these changes to remote [y/n]: ")
    if git_flag == 'y':
        git_operations()
    else:
        return 0
    

def main_script():
    
    CREATE_FLAG = input('create / edit / exit / push [c/e/o/p]: ')
    
    workspace_to_txt()
    
    if CREATE_FLAG == 'c':
        # Retrieving frontmatter 
        frontmatter = create_frontmatter()
        frontmatter_title, frontmatter_id, thumbnail = frontmatter[2], frontmatter[1], frontmatter[3]
        # Creating title
        file_markdown_name = markdown_title_on_create(frontmatter_title)
        # Starting file creation process
        write_frontmatter_to_file(CREATE_FLAG, file_markdown_name, frontmatter[0])
        store_markdown_frontmatter_on_create(file_markdown_name, frontmatter_id, frontmatter[0])
        write_markdown_to_file(file_markdown_name)
        if thumbnail != "default.png":
            push_image_to_repo(thumbnail)
    elif CREATE_FLAG == 'e':
        file_markdown_name = write_frontmatter_to_file(CREATE_FLAG)
        write_markdown_to_file(file_markdown_name)
    elif CREATE_FLAG == 'o':
        workspace_to_md()
        return 0
    elif CREATE_FLAG == 'p':
        workspace_to_md()
        push_to_repo(input('Enter post ID: '))
        return 0
    else:
        workspace_to_md()
        print('Please enter a valid option!')
        main_script()
    
    workspace_to_md()
    
    temp_to_markdown(file_markdown_name)
    
    move_flag = input('Do you want to move this file to the post dir [y/n]: ')
    move_to_posts(CREATE_FLAG, file_markdown_name) if move_flag == 'y' else None


main_script()