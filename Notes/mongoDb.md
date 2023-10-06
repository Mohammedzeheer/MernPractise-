                                            MONGO DB
_____________________________________________________________________________________________


 What is mongoDB?
____________________

 MongoDB is a document-oriented database management system (DBMS) 
 that uses JSON-like documents with optional schemas

- It is a document database.
- It is an NoSQL data base.

Document database
-----------------

- Records in a MongoDB database are called documents
- It is similar to JSON (Java Script Object Notation )
- It is stored like field , value pairs	
- The values of field may include arrays, array of documents.


  Eg:{
       Product:"Laptop",
       Brand:"HP",
       Model:"HP 12342",
       Price:35000,
       color:["grey","black","blue"]
     }


ADVANTAGES OF MONGODB
--------------------

it is non SQL so it is faster than SQL

scalablity(horizontal scaling), 
High perfomance
High Speed and Higher Availability. 
Simplicity. 
Easy Environment and a Quick Set-up. 
Flexibility. 
Sharding. 


DISADVANTAGES OF MONGODB
------------------------
 Transactions.
 Joins.  
 high memmory usage, 
 limited document size(16MB), 
 limited nesting(100levels)

--------------------------------------------------------------------------------------------------

01 SQL vs NoSQL
__________________

SQL
-----

- Structured Qurey Language
- DB are categorized as Relational Data Base Management System (RDBMS)
- DB display data in tabel form AKA table based database.
- It take more memmory (if we created a table and if i didn't give  anything , 
  it take memmory for the space even 

NonSQL
-------

- Non Strucured Query Language
- DB are categorized as non Relational Data Base Management System (NRDBS)
- DB display data in collections of documents. key value pairs.
- It didn't take more memmory like SQL


--------------------------------------------------------------------------------------------------


02 Types of Database
____________________

   > SQL database 
   > NonSQL database 
   > Network database
   > Hirarchial database
   > Object-Oriented database


--------------------------------------------------------------------------------------------------


03 Mongo shell & Mongo Server
______________________________

-  If we install mongodb  we will get these two applications.
-  Both are seprate.


Mongoshell
-----------

. 'mongo' command is used to launch mongoshell.
. used to management of mongoserver. like you can update data , delete...etc
. Based on javascript engine


Mongoserver
------------
. 'mongod' command is used to launch mongo server.
. It stored data into database.
. Based on javascript engine


--------------------------------------------------------------------------------------------------


04 JSON
_____________
  
  - Javascript Object Notation
  - Data present in JSON is a string object .
  - JSON object is a string
  - It is used for Data exchange between clint & server and different server.


STRUCTURE
----------

'{
   "Name":"Mohammed",
   "Age": 23,
   "Domain":"MERN stack"
}'


- each key's serrounded by double-quaters , we cannot use single quates here.
- it has 6 type's of datatypes 
  String , number , Boolean , Array , Object , Null 
 


4.1 JSON vs JS object
________________________________


JSON                                     
------

. It is a set of field value pairs surronded by string.
. It is a string. not an object.
. It must surround each key in double quaters.
. we can convert JSON into javascript object  it has a fucntion for it . JSON.parse()


JS object
----------


. It is a set of key value pairs  surrounded by curly braces. 
. It is not  a string. It is an Object. 
. It is not used double quates around each key. ( we can use it but it is not required )
. We can convert JS object into JSON format . it has a function for it . JSON.stringify()


--------------------------------------------------------------------------------------------------


05 BSON
___________

- document in the database are stored in the binary format(BSON).
- Binary Java Script Object Notation (BSON).
- It support most datatypes .
- ASCII code is represented by pair of Hexadecimal numbers.


5.1 Extended JSON
__________________

- It is used for represent datas stored in BSON format in Readable format.

5.2 Most common BSON types and Representation in extended JSON
________________________________________________________________

> String           " Hellow world " 

> Object           {"type":'mohammed',"price":1000}

> Boolean          true , false

> Array            [10, 40 ,50]

> Double           40.2

> 32-bit Intiger   numberInt(150)  

> OjbectID         ObjectId("12sd3432gaefr543765")      it used to unique each document in mongodb.

> Date             ISODate("22-02-2005")                it is used to represent date in mongodb 


--------------------------------------------------------------------------------------------------


06 Collections
________________

- It is a group of documents 

  > db.createCollection("<Name>").    (To create collection)
 
  > show collections                  (To show collection)

  > db.collname.drop()                (To delete Collections)
 

6.1 CRUD
________

  > Create  
  > Read
  > Update
  > Delete

                  CREATE
=============================================


- we can create document using these methods

  . insert()
  . insertOne()
  . insertMany()


insert() 
---------

  * It is a conpaination of insertOne and insertMany.
  * we can insert data as arrayof document or single document

    db.Brototype.insert(  {name:"mohammed"} )

insertOne()
-----------

  * we can insert only one document .
  * If we try to insert array of documents , it will take only one documents

    db.Brototype.insertOne( {name:"mohammed"} )

insertMany()
-------------

  * We can insert array of documents.
  * we can also insert one document

   db.Brototype.insertOne([ {name:"mohammed"},{name:"mohammed"},{name:"mohammed"}] )


                  READ
=============================================

* we can find data using these methods


   . find()
   . findOne()
   . findMany()



find()
-------


this method return all the matches 

db.Brototype.find( {name:"Mohammed"})



findOne()
-----------
this method return only the first finding

findOne( {name:"Bode lockes"})



findMany()
-----------

this method return all the findings

findMany( {name:"Bode"})


query oprators
________________


comparisonal oprators
-----------------------

$gt           db.Brototype.find( { age: { $gt:25 } })

$lt           db.Brototype.find( { age: { $gte:25 } })

$gte          db.Brototype.find( { age: { $lt:25 } })

$lte          db.Brototype.find( { age: { $lte:25 } })

$eq           db.Brototype.find( { age: { $eq:25 } })



logical oprators
----------------

$and          db.Brototype.find( { $and: [ { age: { $gt: 25 } }, { Batch: { $lt: 57 } }] })

$or           db.Brototype.find( { $or: [ { age: { $gt: 25 } }, { Batch: { $lt: 57 } }] })

$nor          db.Brototype.find( { $nor: [ { age: { $gt: 25 } }, { Batch: { $lt: 57 } }] })

$not         

$in 


sort() limit() skip()
_______________________


sort()
--------

we can sort data using this function

 db.Brototype.find(). sort({ age: -1 })


- decending order -1 

- acending order 1


limit()
--------

- we can give limit while we serching  if we give limt find method return limited data which limit what we gave.

  db.Brototype.find().limit(1)


skip()
------

- if we give skip the method return after skipping a perticular documents.

  ` db.Brototype.find().skip(2)`


                                      Update
======================================================================================


- We can update data  & insert field also using some oprations given below

  . updateOne()
  . updateMany()


updateOne()
------------

- if you have two or more same data and you wanna change those 
  this method only change first match

  db.Brototype.updateOne({name:"unknown"},{$set:{name:"dummys"}})


updateMany()
-------------


- you can update & insert two or more documents.

  this method change each matchings


  db.Brototype.updateMany({name:"unknown"},{$set:{name:"dummys"}})



Field Update Oprations
=========================
 
$set           db.Brototype.updateMany({name:"unknown"},{$set:{name:"dummys"}})

$unset         db.Brototype.updateOne( { name: "dummys" }, { $unset: { Catagory: "dummys" } })

$rename        db.Brototype.update( { Name: "sahad" }, { $rename: { Name: "name" } })

$currentDate   sets the value of a field to the current date

$inc           db.Brototype.updateOne( {name:"zeheer"},{$inc:{Batch:57}})
               db.Brototype.updateOne({age: { $gt: 25 }},{ $inc: { salary: 1000 }})


               db.Brototype.updateOne( {name:"zeheer"},{$inc:{"arrayname.item":12}})  (in the case of array)



array update Oprations
==========================


$            db.Items.updateOne( { name: "zeheer" ,skills:"CSS"}, { $set: { "skills.$": "HTML" } })

             (It is used to update Oprations)

push

-------------------------------------------------------------------------------------------------------

07 MongoDB Atlas
__________________


- It is Cloud database

-------------------------------------------------------------------------------------------------------

08 Aggragation Framework
________________________

- It is itrating data stage by stage 

- if we pass our collection to each stage it will itrate data.


aggregation stage or aggregation opartors
------------------------------------------

$match    {$match : {Key:value} } 

$group    {$group : {_id: "$value" } }

$sort     {$sort : { key : 1 } }               1( acending order) -1( descending order ) 

$count    {$count : {"variable"} }              

$project  {$project: {"key":1, "key2":0}}      1(show data)  0(don't show)

$limit    

$skip

$out      

$first

$last

$unwind


8.1 Aggregation pipeline
__________________________

- specific flow of oprations like (match, group..etc) and return result are called AGGREGATION PIPLINE.

--------------------------------------------------------------------------------------------------


9 indexes or indexing
_______________________

- Indexes are the fastest  way to find documents.
- let suppose if you have 1000 objects or documents you should give an index to each documents.we can call it easly.
- if you don't give the mongoDB will automatically give an index.

  db.collectionname.createIndex( {key:1} ) 

- we can give index using createIndex() method

- Types of index. 

  _Single field indexing_ - use for quick to index single field
_compund indexing_ - improve perfomance of queries that involve multiple field
_multikey indexing_ - these are used for efficient indexing of array fields
_geospatial indexing_ - these used for indexing of location based data
_Text indexing_ - this index support searching for string content in document
_Hashed indexing_ - 
_TTL indexing_ - These index automaticaly remove document from collection after certain amount of time.

--------------------------------------------------------------------------------------------------


10 Utilites
___________________


- It is a collection of Command line utilities for working with a monogdb deployment
- It can be used for data management in Mongodb

  
  It has four types of commands

  > MongoExport       used to export data to specific collection

  > MongoImport       used to import data from specific collection
 
  > MongoDump         It creates dump from mongodb database

  > Mongorestore      used to restore data from mongoDB dumb

--------------------------------------------------------------------------------------------------


11 Replica sets
________________

- It is several mongodb servers
- In replica set there is only one primary server  
  other's are secondary servers
- we can change only primary server. 
  means if you want to update data , we can change it only on the primary server
  the change is automatically propagated to all secondary servers.

> THE CHANGES REPLICATED FROM PRIMARY TO SECONDARY

- If primary server falis , then one of the secondary server become primary server

* we can read data from primary and secondary servers along with it
* But we can write data only from primary server. we cant write from secondary server.

--------------------------------------------------------------------------------------------------

12 Lookup
____________________

  > It is an aggregation stage
  > It is used to join a document from one collection to a document of other collection
  > contition is both collection should be in one database.

 db.<to which collection> .aggregate(  
 {$lookup:
       { 
          from:"collection nanme where data from",
          localField:"Domain",
          foreignfield:"Domain"
          as:"dataname which data you want to add"
      } 
 }
 )

-----------------------------------------------------------------------------------------------------

13 UPSERT

   "upsert" is a combination of "update" and "insert". It allows you to update a document if it exists, 
    or insert a new document if it doesn't. This is useful when you want to update a document 
    if it's present in the collection, or insert a new one if it's not.

    db.users.updateOne(
                        { _id: 1 },
                        { $set: { name: "John Smith", email: "john@example.com" } }, 
                        { upsert: true }
                      )

------------------------------------------------------------------------------------------------------

14  CAPPED COLLECTION

   A capped collection in MongoDB is a special type of collection with a fixed size. 
   It maintains the order of insertion and automatically overwrites old data when it reaches its limit

   db.createCollection("myCappedCollection", { capped: true, size: 100000 })

------------------------------------------------------------------------------------------------------


15  CAP THEOREM
    
    The CAP theorem known as Brewer's theorem, is a fundamental principle in the field of distributed systems
   
     Consistency (C) : All nodes see the same data at the same time.
     Availability (A): The system always responds to requests.
     Partition tolerance (P): The system keeps working even if some nodes can't talk to each other.

-------------------------------------------------------------------------------------------------------

16  AGGREGATION

    Aggregation : 
                 involves processing data in a collection to retrieve, analyze, and transform it.

    Aggregation Pipeline :
            is a framework for performing step-by-step data processing operations on a collection. 
            It uses stages with operators to manipulate and transform documents.

-------------------------------------------------------------------------------------------------------
17 SHARDING
   
    sharding is a critical feature that allows you to horizontally partition your data across multiple servers. 
    This helps in distributing the workload and enabling high performance for read and write operations, 
    as well as handling large amounts of data.

    Sharding in MongoDB is a way to distribute a large database across multiple servers. 
    This improves performance and allows handling more data. It works by dividing the data using a "shard key."
    Config servers keep track, mongos routes requests, and shard servers store the data. 
    Setting up sharding involves enabling it, choosing a shard key, and distributing data. 
    Monitoring and managing shards is important for optimal performance.

-------------------------------------------------------------------------------------------------------
18: NORMALIZATION 

    normalization is a technique used in database design to organize data efficiently, reduce redundancy, 
    and enhance data integrity and consistency.
-------------------------------------------------------------------------------------------------------

19  elemMATCH
  $elemMatch 
  is a projection operator in MongoDB used to filter the elements of an array based on specific criteria. 
  It's commonly used in queries to find documents where at least one element in an array matches a given condition.

  {
    "_id": 1,
    "name": "Product A",
    "prices": [10, 15, 20, 25]
  }

  db.products.find({ prices: {$elemMatch: { $gt: 15 }}})

-------------------------------------------------------------------------------------------------------
20 BULK WRITE 

   Bulk write in MongoDB lets you perform multiple write operations at once for efficiency, 
   rather than one by one. It's done using the bulkWrite() method, which takes an array of write 
   operations as input. Each operation specifies the type (insert, update, delete) and the details. 
   This reduces communication between your app and the database.

    const bulkOps = [
    { insertOne: { document: { name: 'Product A', price: 10 } } },
    { insertOne: { document: { name: 'Product B', price: 15 } } },
    { insertOne: { document: { name: 'Product C', price: 20 } } }
  ];

  productsCollection.bulkWrite(bulkOps, (err, result) => {
  

-------------------------------------------------------------------------------------------------------
21 BATCH SIZE 
   
   Batch sizing in MongoDB is about how many documents you process or retrieve at once.
   It's like how many items you handle in a single batch. This helps balance speed and memory usage. 
   Adjusting batch size can make operations more efficient.
-------------------------------------------------------------------------------------------------------
22 TTL

   "Time To Live." It automatically deletes documents from a collection after a set time.
   This is done using a TTL index on a field with expiration times.

   Eg:  db.myCollection.createIndex( { "expireAt": 1 }, { expireAfterSeconds: 0 } )

-------------------------------------------------------------------------------------------------------
23  CURSOR 
 
   A cursor in MongoDB is like a pointer to the results of a query. It helps you retrieve and process 
   documents one by one, which is efficient for large datasets
  
 Eg: const cursor = db.collection('mycollection').find({ status: 'active' });

   cursor.forEach(doc => {
      console.log(doc);
   });

-------------------------------------------------------------------------------------------------------
24 SHARD KEY 
 

  A shard key in MongoDB is like a label that determines how data is distributed across different servers (shards).
  It's chosen when you split a large dataset across multiple machines. 

  For example, 
  if you use "country" as the shard key, all data for a specific country is stored together. 
  This helps with efficient retrieval, but picking the right shard key is important for balanced distribution.
-------------------------------------------------------------------------------------------------------
25  QUERY ROUTES

   Querying routes in MongoDB involves using the find() method to retrieve specific route information 
   from a collection based on specified criteria.

   // Assuming we have a MongoDB collection named "routes"

     const query = { origin: "City A", destination: "City B" };
  .  const result = await routesCollection.find(query).toArray();
-------------------------------------------------------------------------------------------------------

Journaling:

Journaling in MongoDB is a process of writing all write operations to an on-disk journal before they are applied to the database data files. This ensures that the database will be in a consistent state even if MongoDB crashes unexpectedly.

`how journaling works in MongoDB:`

- When a write operation is performed, MongoDB writes the operation to an in-memory buffer.
- Once the buffer full, or after certain interval of time, MongoDB writes contents buffer to the journal file.
- Once the journal file is written, MongoDB applies the write operations to the database data files.

// Enabling journaling
db.adminCommand({setParameter: 1, journalCommitInterval: 100});

// Adding a document to a collection
db.myCollection.insertOne({name: "John Doe", age: 30});

-------------------------------------------------------------------------------------------------------
  DATE VS TIMESTAMP 

  Both data types used to store date and time information

  DATE : stores the year, month, and day  , Does not store time zone information

  TIME STAMPS : stores the year, month, day, hour, minute, second, and fractional seconds 
                also store the time zone information

-------------------------------------------------------------------------------------------------------

   REMOVE VS UNSET 
  
   Both used to remove data from a document.

   REMOVE : removes the entire document from the collection.   db.users.remove({name: "John Doe"})
   
   UNSET  : removes a specific field from a document.   db.users.update({name: "John Doe"}, {$unset: {age: 1}})

-------------------------------------------------------------------------------------------------------

$pop and $pull 

 both update operators in MongoDB, but they serve different purposes:

   $pop is used to remove the first or last element of an array.
  `db.collection.updateOne({ _id: ObjectId("document_id") },{ $pop: { myArray: 1 } })`

   $pull is used to remove all instances of a value or values that match a specified condition from an array.
   `db.collection.updateOne({ _id: ObjectId("document_id") },{ $pull: { myArray: { $gte: 30 } } })`




____________________________________  NOTES _____________________________________________________________


_MongoDB_ - is document based database management system
_Collection_ - is group of mongoDB documents
_Documents_ - data sturcture composed of key value pairs similar to sturcture of JSON Object.
_Lookup_ - it is aggregation operator which is used to join document from one collection to document of 
another collection.
_Unwind_ - used to deconstrut array field into multiple documents

_In vs all_ 
In - return all document which match any of value provided.
all -  return document which matches all the vlaues  provided, equivalent  to $and

_$not_ - return docmunet that does not match the operation.
_$expr_  - operator is used within the aggregation framework to perform advanced and complex query operations. 
```
db.products.aggregate([
  {
    $match: {
      $expr: { $gt: ["$price", "$cost"] }
    }
  }
])
```
_Capped Collection_ - collection with fixed size and predefined order. it overwrite old data when size limit reached, example is logs 

```
db.createCollection("c_coll", {capped: true, size: 100000})
```
_Alias_ -  alias is used to create alternate name for collection or database
`db.createCollection("newCollectionName", { viewOn: "originalCollectionName" })`
_Mongo Utilities_ - command line tools for working with mongo db
	- mongodump, mongorestore
	- mongoexport, mongoimport
	- mongostat, mongooplog
_Mongo Dump_
_Indexing_ - process of creating index to improve query perfomance 
`db.Products.createIndex({ category: 1 })`
_Logical operator_  logical operatores are used to combine multiple condition
```
db.collection.find({$and: [
	{cond 1},
	{cond2}
	]})
```
_Comparison operator_ - It is used to compare values
```
db.collection.find({age: {$gt: 18}})
```
_Namespace_ - combination of database name and collection name  
_addtoSet()_ - used to add value to array, if value exist, it will do nothing
```
db.books.update(
	{_id:1},
	{$addToSet: {
	author: "jon"
	})
```
_Insert vs save_ Insert used to insert new document, when we pass save with existing id it will replace document with existing id, in insert duplicate key error will happen.
- Traversin is fast.
- efficient data storage and transmission.support wide range of data types
_BSON_ - Binary JSON mongodb used to transmit and store data
_Mongo export_ - command-line tool that produces a JSON or CSV export of data stored in a MongoDB instance.
_Update Operators_ - used to modify data in document
$set, $unset, $push, $inc, $addtoset
_set_ -set value, if does not exist it will create
_unset_ - remove field
_inc_ - increse value by given amount
_Distinct_ - retrive distinct value from a field - `db.users.distinct("name")
`
 _unique_ - it is applied to field, if field mark unique its values must be unique
 `db.collection.createIndex({'field':1}, {unique: true})`
_Accumulators_ - it is used in aggregation pipeline to perform calculation and generat aggregated result
`$sum, $avg, $min, $max`
_count_ - count number of documents in collection or view - `db.collection.count({age: {$gt: 25}})`
_Out_ - it used to store output of aggregation into new collection,  if collection does not exist it will create new one. it will overwrite existing collection.
_merge_ - store result of agregation to collection. it update collection.
_findone_ - return only one document that satisfy given criteria
_update_ - update document in collection
_indexing_ - process of creating index to improve query perfomance
_Single field indexing_ - use for quick to index single field
_compund indexing_ - improve perfomance of queries that involve multiple field
_multikey indexing_ - these are used for efficient indexing of array fields
_geospatial indexing_ - these used for indexing of location based data
_Text indexing_ - this index support searching for string content in document
_Hashed indexing_ - 
_TTL indexing_ - These index automaticaly remove document from collection after certain amount of time.
_disadv of Index_ - decrese perfomance of insert, update and delete, takes extra space in memmory, When data is inserted, updated, or deleted, the index needs to be maintained as well as the original data.
_Sharding_ - distributing data across multiple servers. For horizontal scalabilitiy
_Replication_ - process of storing/synchronizing data across multiple servers, to provide high availability and data redunancy
_Replica set_ - group of mongo db server that maintain same data set.
_Aggregation_ - performing step by step operations on collection of dcouments to perfomr complex transformation and calculation on data.
_MongoDB aggregation_ is a way to process a large number of documents in a collection. The documents are passed through different stages, called a pipeline. The stages can filter, sort, group, reshape, and modify the documents.
_Aggregation Pipeline_ - refers to specific flow of operations that process, transform data and return result
_Noramlisation_ - process of organising data in data base to reduce reundancy and improve data integrity
_Denormalisation_ - adding reduntancy to database to increase _read_ perfomance.
_Transaction_ - is logical unit of work which contain one or more database operation
_Atomicity_ - A transaction is treated as single unit of work
_Consistancy_ - Transaction bring databsae from one consistant state to another
_Isolation_ - Transaction operate independently of each other
_Durability_ - once transaction completed changes are permenently saved and survive system failure.
_CAP Thearom_ - It states that distributed database can have at most two of three properties. consistancy availability and partition tolarence
_Partition tolerance_ is the ability of a cluster to continue operating despite communication breakdowns between nodes.
_cluster_ - group of inter connected mongodb servers which provide, high scalability availabilty and fault tolarence.
_2 types of clusters_: replica sets and sharded clusters
_Journaling_ - creating log of evey operations that applied to database.
This allows the data to be restored to a consistent state if the server shuts down unexpectedly.
_Gridfs_ - allow storage of file that are larger than 16MB.
_ADV of MONGODB_ flexibility,  scalablity(horizontal scaling), High perfomance
_cursor_ - pointer to returned result of query 
_Disadv of MONGODB_ - high memmory usage, limited document size(16MB), limited nesting(100levels)
_Auto scaling_ - Auto scaling in atlas allow you to automatically add or remove insatance based on demand.
_Bulkwrite_ - used for insert, deleta and update multiple data in single opeation.
_Limit_ - used to limit number of document in result
_batchSize()_ - When you execute a query with a large result set, MongoDB doesn't send all the documents at once. Instead, it sends documents in batches specified by the batchSize value.then the cursor will send a getMore message to the server when it needs the next batch of results.
_Shard key_ - contain information about of data distributed over shard clusters.
_query router, or mongos process_, -  is the interface and entry point to a MongoDB cluster. Applications connect to the mongos process instead of connecting to the underlying shards and replica sets. The mongos process executes queries, gathers results, and passes them to the application.
_Embedded document or Nested document_ - Document contain another document
_concurrancy_- MongoDB uses locking and concurrency control to ensure that multiple clients can read and write the same data without modifying it simultaneously. MongoDB uses reader-writer locks to allow concurrent readers to share access to a resource, but only give exclusive access to a single write operation.
////////////////////////////////////////////////////////////////////////
-  `db.orders.aggregate({$match:{size:"medium"}},{$group:{_id: "$name", count: {$count:{}}}})` 
-  `db.orders.aggregate({$match:{size:"medium"}},{$group:{_id: "$name", count: {$sum:"$quantity"}}})`
- `db.orders.aggregate({$match:{date:{$gte : new ISODate("2020-01-30"), $lt: new ISODate ("2022-01-30")}}}, {$group: {_id: {$dateToString: {format: "%Y-%m-%d", date: "$date"}}, total:{$sum:{$multiply:["$price", "$quantity"]}}, average:{$avg: "$quantity"}}}, {$sort: {total: -1}})`

