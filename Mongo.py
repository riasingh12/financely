#!/usr/bin/env python
# coding: utf-8

# In[105]:


pip install pymongo


# In[111]:


import pymongo as pm
from bson import ObjectId


# In[13]:


#connecting to your db
connection = pm.MongoClient('localhost',27017)


# In[14]:


#create db
database = connection['mydb_01']


# In[18]:


#create collection
collection = database['mycol_01']


# In[121]:





# In[130]:


#updation to db
def update(document_id,data):
    document = collection.update_one({'_id':ObjectId(document_id)},{"$set":data},upsert=True)
    return document.acknowledged
#passing the id to be changed and the data
#_id specifies which id of the data to be changed. ObjectID type castes passed document_id from string to objectid type
#ObjectID is a function in bson, binary format of JSON
#update a particular id, if not exist, creates new one. upsert. 


# In[124]:





# In[128]:


#getting all in the form of a dictionary
def getm():
    data = collection.find()
    return dict(data)


# In[2]:


def check(data):
    if age>65:
        return eligoldage
    if age>40: 
        if gender=="F"
            if widow
            return eligwidow
    if age>=19 and age<65:
        if disabled
            return eligdis
    if gender=="M" 
        if primbre = "N" and source = "N"
            return eliganna    
            


# In[ ]:




