from sqlitedict import SqliteDict

mydict = SqliteDict('key_value_store.sqlite', autocommit=True)
mydict['some_key']='Hello'
print(mydict['some_key'])
mydict.close()

mydict = SqliteDict('key_value_store.sqlite')
print(mydict['some_key'])