                                                              
                                 NODE JS EXPRESS

What is NODE.JS ?

   Node js is a serverside Platform
   before node.js we can only run JS inside the browser
   Node run's on V8 engine.
   V8 engine created using C++
   after the node.js we can Run js inside the server 
   used for create server side application

 ------------------------------------------------------------------------------------------------------------------

Features of Node.JS ?

  - Asynchronous
  - Very fst
  - Single Threaded
  - Can generate Dynamic Page 
  - It can create, read , modify , delete files on the server. 
  - It can collect form data.
  - We can create, read , modify , delete files  on the datbase.

   Advantage --
   - Better Efficiency
   - code Sharing and Reuse
   - speed % performance
   - easy knowledge
   - huge number of free tools 

   Disadvantages
   - Unstable Api
   - lack of library support
   - Asyncronous programming model 
   - Heavy computing task 
 ------------------------------------------------------------------------------------------------------------------

01 REPL
___________

- Read Evaluate Print Loop
- It is a console from node we can test node inside in it.
- test simple Node.js code 

 ------------------------------------------------------------------------------------------------------------------
  
02 Module 
___________

- It is like node.js library 
- We can use it in our js page 
- we can access the pages using require()

Three type's of modules

    * Core Module
    * Local Module
    * Third-party Module

> Core module

    - It is a Built-in module's 
    - It'll install with when we install Node.JS
    - We can accsess this module using require() in our page

> Local modules

    - We can create our own modules and we can use it in our Project
    - We can export these module using module.Exports
    - We can use it in our page using reqire()

> NPM Third-party Modules

    - When we install node also we get NPM 
    - Node Package Manager
    - It allows you to install and use
    - We can download this module's from NPM.com

 ------------------------------------------------------------------------------------------------------------------
  
03 Global objects
_________________

- Global Objects are the Object we can use it in all modules
- These are Built-in Modules
- They are part of JS
- We can use these in our Project without importing any perticular Module

Some of them ...

* console.log()
* setTimout()
* setIntervel()
* __dirname
* __filename


__dirname VS __filename :-

let assume our path is like this :-

c/user/desktop/hp/nodeTutorial/action.js


__dirname

     path without file name only folder where the file is .

     c/user/desktop/hp/nodeTutorial


__filename

    path with file name 

    c/user/desktop/hp/nodeTutorial/action.js

 ------------------------------------------------------------------------------------------------------------------
  
04 OS Module    ( this is not important just read..)
_____________

- It is a built-in module (Core Module)
- This module provides many functions that you can retrive informaiton about our Oprating System 

some of them .....

> OS.type()        for OS details 
> OS.arch()        for Bit details        x32 x64
> OS.platform()    for platform details   win64
> OS.release()     for released date
> OS.version()     for Current vrs details
> OS.uptime()      for time when system poweron
> OS.userInfo()    for User details 
> OS.totalmem()    for Total Memmory
> OS.freemem()     for free Memmor in our system
> OS.cpus()        for informaiton about CPU
> OS.networkInterfaces()    for Current connected network. 

 ------------------------------------------------------------------------------------------------------------------
  
05 FS Moudule (file system)
____________________________

- FS module allows you the accsess or work with file on your system

- Common Uses :
   
   * readfile
   * Createfile
   * Updatefile
   * Deletefile
   * Renamefile


readfile                                                                                              
---------

if you have a text file  sample.txt you want to read it .

- readfile() method can read file 
- it take three parameters 
- readfile("sample.txt" , "utf-8" , callback for error)
- what is the use of utf-8 ? 
  every file is like 34 44 like this we want ot read the orjinal content we should use utf-8 it 'll convert 
  binary into normal content 


createfile
-----------

if you want to create any file like sample.txt

- writeFile() u can use this
- it take three parameter
- writeFile( "sample.txt" , "content" , callback for error )


updatefile
-----------

if we created a text file and  you wrote some content in it now you trying to add new content, 
what happent ? the old content i'll delete and now content is store instead of it .
we can solve this problem using function given below 

- appendFile() if we use this u can add new content's with your old content
- appendFile() take three parameter
- appendFile( "sample.txt" , "this is new content u want to add with your old content" , callback for error)


renamefile
-----------

if you created a text file called sample.txt now you want to rename it into new.txt you can rename using function given below

- rename()
- it take 3 parameters 
- rename("sample.txt" , "new.text" , callback(err))
- first paramere is your old file name
- second file name is new name you want to change


deletefile
-----------

if you want to delete sample.txt file ,

- unlink()  we can delete file's using this
- It take 2 parameters 
- unLink( "sample.txt" , callback for err )


mkdir()
--------
- we can use it for making folder or file name
- it take  3 parameters 

- path.join (__dirname, "which folder you want to create ")
- {} optional parameter 
- callback for error

rmdir()
--------
- we can remove files or folders 
- It take 3 parameter 

- path.join (__dirname, "which folder you want to delete")
- {} optional parameter
- callback for error

let's assume if you have nested folder like this,

folder/newfolder/filefolder/index.js

you want to delete all folder 
if you use this metod given above , it become a  error
you should give a value inside the optional ({}) parameter 

{ recrusive : true }

if you give like this you can remove all directory



chapter summary 
----------------

1. readfile()
2. writeFile()
3. appendFile()
4. rename()
5. unLink()
6. mkdir()    it is similar to writefile for making new file or folder
7. rmdir()    it is similar to unlink for deleting new file


------------------------------------------------------------------------------------------------------------

06  Path Module
-----------------

- It will allow you to intract with file path easily
- We can accsess file paths and change paths in the file system.

it has some methods

* basename()
* dirname()
* extname()
* join()
* parse()


basename()
----------

- if you have a path like this given below

p = C/users/hp/nodejs/index.html

if we use this function,

path.basename(p)

you will return index.html

index.html is the base name


dirname()
----------

- if you want to find the folder where the file is located
- if you have a path like this given below

p = C/users/hp/node.js/index.html

path.dirname(p)

you i'll get nodejs where is the file is located


extname()  
----------

- if you want to finde the extension name of the file 
- our path is 

  p = C/users/hp/nodejs/index.html

  path.extname(p)

the base file is html file so the 
method return "html"


join()
--------

- You can join two or more path into a single path 

  path.join( "folder/views" , "index.hbs" )

method return  a new path it is 
  
  folder/views/index.hbs


parse()
-------

- You can retrieve details about path using parse method
- if your path is like this

  p = C/users/hp/nodejs/index.html

  path.parse(p)

- method will return a information about as objects like this the object contain these informaion about path
  
  {
     dir: 'C/users/hp/node.js',
     base: 'index.html',
     ext : 'html'
     name: 'index'
  }


- Chapter Summary 
-------------------

1. basename()  -filename
2. dirname()   -file contain folder
3. join()      -concat two paths
4. parse()     -information about paths as object 
5. extname()   -file extension name

------------------------------------------------------------------------------------------------------------

07. HTTP module 
_________________

  - Hyper Text Transfer Protocol
  - It is an built in module
  - using for Trasfer files 
  - We can create server, it listen to server ports and gives a response back to the clint

  > process.env.PORT   it is for check is server giving you any port

  > writeHead()        used for define type of content is this 
    It take two arguments  
    - status code  eg: 200, 400, 404
    - content-type eg: html , txt , json
    `writeHead( 200 , " Content-type : "text/htm" )`

  > listen()           used for define port.

  > res.end()          if we don't give this , programme won't end  it will load is any file to fetch

  > res.write()        write content for displaying in broweser page


------------------------------------------------------------------------------------------------------------

08 Timer methods 
_________________

- it is a global objects we dont need of special installation

set timer functions
--------------------

  * setTimout()
  * setIntervel()
  * setImmediate()
  * process.nextTick()

clear timer functions 
-----------------------

  * clearImmediate()
  * clearIntervel()
  * clearTimout()	


setTimout()
-------------
  - It is a global function if we give any statement in it , it will excute after a specified time 
  - we can set the time 


setIntervel()
--------------
  - if is a global function if we give a statement in it, it will excute continesly a specified time intervel untill 
  we terminate


clearIntervel()
---------------

  - if we write a code inside a setIntervel it'll continuesly excute untill we terminate
    if you want to stop that flow after a specified time , we can use clearIntervel 
 
    const ci = setIntervel()   --- create a variable and assume the function in it 
 
    clearIntervel(cl)            --- pass the function and define a specific time inside the setTimout()
  
 
setImmediate()
----------------

- It will excute a fuction after current event loop finshes.


Process.nextTick()
-------------------

- It'll excute a fuction after current event loop finishes 
- but the only difference is given below

  If we write a setImmediate() and process.nextTick() ,
  it excute nextTick() and after excute  setImmeidate()

  it means process.nextTick has priority more than setImmediate() 

  so, That is the different!


 Chapter summary
---------------------

  1.setTimout        - excute after a perticular time
  
  2 setIntervel      - excute based on a perticular intervel

  3 setImmediate     - excute after current eventloop  finishes

  4 process.nextTick - it similar to immediate but more priority

  5 clearIntervel    - for stop the intervel after a specified time

  6 cleartimout      - for clearing timout 

------------------------------------------------------------------------------------------------------------

09   events 
______________

const eventEmiiter = reqire("events");
const emitter = eventEmitter();
 
  - if any event is happend, we want to give a notification to user . eg - if user logged , 
    you should inform user logged,
  - used to give information if any event is happened .

  emitter.on( "notification " , (data) => { console.log(data.info) } )
  emit{ " notificaiton "  , { info : "hai user logged " } 

------------------------------------------------------------------------------------------------------------
 
10 Errors 
_____________

- Node.JS application has four types of errors
  
  1 Standerd javascript error
  2 Assertion Error
  3 System Error
  4 User-specified error

- Standerd JS error includes these :- 

  reference error Eg:  console.log(variableThatDoesNotExist); // ReferenceError: variableThatDoesNotExist is not defined

  syntax error    Eg:  if (x = 10) { // SyntaxError: Invalid assignment left-hand side// Some code}

  Type error      Eg:  var num = "Hello";
                       num.toUpperCase(); // TypeError: num.toUpperCase is not a function

  URL error       Eg:  decodeURIComponent('%'); // URIError: URI malformed

  Eval error      Eg:  eval("console.log('Hello, world!');"); // EvalError: alert is not defined

  Range Error     Eg:  var arr = [1, 2, 3];
                       arr.length = -1; // RangeError: Invalid array length

------------------------------------------------------------------------------------------------------------
 11 DNS module
 _______________

  - Domain Name System.
  - DNS module contains method to get information of given DNS.
  - Some methods :-

     getServers()
     Resolve()
     reverse()
     lookup()
     loockupServeice()


------------------------------------------------------------------------------------------------------------
 12 NPM
 ________                             

  - Node Package Manager
  - Node has thousands of packages we can download and use
  - It'll install on your computer when you install node !

------------------------------------------------------------------------------------------------------------
 13 View engine
 _______________

  - It is used to render dynamic content in webpages 
  - some example of view engine :-
                                 HBS
                                 Mustache
                                 EJS
 
------------------------------------------------------------------------------------------------------------
 14 HTTP Methods
 _______________
  1 Get 
  2 Post
  3 Patch
  4 Put
  5 Delete
  
 GET
 -----
  - for READ data from server 
  - In the case of success GET returns 200 status code (ok)
  - In th case of Error It return 404 status code (not fond) or 400 (bad request)
  - It is cosidered safe

 POST
 -----
  - To post data on the server
  - On succussfull creation , HTTP respond 201 status code
  - we can put data to server from form 
  - It is considered not safe

 PUT
 ----
  - Used to update data
  - It is not safe
 
 PATCH
 ------
  - used to update data

------------------------------------------------------------------------------------------------------------

 15 PATCH VS PUT
 ________________

 PATCH
 ------
  > It is used to update existing data 
  > It is only Modify which you want to update 
  > It wont change other data
  > If we send same data two more times to change as request , it'll modify every request 
    it take more time

 PUT
 -----
  > It is used to update existing data
  > It is modify which data you want to change and other data will also modify 
  > Difference is If we send same data two more times to change as request , it'll recongnize and modify 
    only one request and so we can consume time


 GET Vs POST 
 ____________

 GET
 ----
  > only limited amout of data we can send 
  > It is not secure data exposed in URL
  > Can be boomarked


 POST
 -----
  > We can pass Large amout of data
  > secure because data not exposed in URL
  > Cannot be boomarked


------------------------------------------------------------------------------------------------------------

 16 Middlewear
 _____________

  - This is a function that excuted between receiving the request and sending the response 

  - Middlewares are like filters that sit between the client and server, 
    allowing you to add extra functionality to requests and responses, 
    such as authentication, logging, or data parsing.

   <-----------------------------------------------------------------------------
   REQ                               Middlewear()                                RES
   ----------------------------------------------------------------------------->

  - ex:  Express.json   which is also called bodyparser

  - all middilwear together that we use in our app is called Middlewear Stack
 
  - our req and response object go through each middlewear.

  - next()

> if we give next function inside the middlewear it will go next middlewear otherwise it wont go next middlewear


 ---------------------------------------------(req)------------------------------------->
 | RES |          middle(1)          middle(1)       middle(1)     middle(1)                   | RES |
   ___              next()             next()          next()                                   _____
 <--------------------------------------------(res)--------------------------------------

           {_______________________________________________________________}
                   (the middlewear chain is called Middlewear stack)               

                   
  req and res cycle 
  ---------------------
  if any request come from clint it'll go through the each middlewear function after it we 'll get response
  this cycle is called REQUEST RESPONSE CYCLE

  Types of MIddlewear
  ---------------------
    > Application Level Middlewear
    > Router Level MIddilewear
    > Error MIddlewear
    > Third-party Middlewear

eg:-

  Error Middlewear
  -----------------
  app.use( err, req, res, next )


  Router Level middlewear
  ------------------------
  router.get( req , res , next )


  Third Party middlewear
  ------------------------
  cookie-parser
  CORS

------------------------------------------------------------------------------------------------------------

17 Package.Json
______________________

  - if you want to copy our code and use it in other system ,
    so you don't want to copy all dependencies with your file  ex:- node module folder

  - you want only your code and PACKAGE.JSON

  - All the dependencies installed  inside in this package (pack.json).

  - Now, you need to use this dependencies , so you should enter this commant in you terminal " npm install " 
    now you can use it !


------------------------------------------------------------------------------------------------------------
  18 Routing 
  ____________

  - A router is a JS object that maps URL to function. 
  - It calls a function based on URL

------------------------------------------------------------------------------------------------------------

  19 Query parameter
  ___________________

   - lets assume this is the link
                                            ---------> things after ?                          
    https://www.google.com/search ? q=what+is+r

  - query parameter's are parameters after ? the qustion's mark that is called query parameter

------------------------------------------------------------------------------------------------------------

 20  SESSION & COOKIE
 _______________________

  > NODE JS follows HTTP or HTTPS method  It is stateless ! it means ,

    if a user intracted with server , after the  same user Intracting with server again . 
    but Server can't understand is this user intracted before ?
  
  > In the case on login page , if we opened Instagram , they'll ask you to loggin, 
    so you'll log and use the app but you open instagram again but app  
    won't ask you to login you can use it without login 
  
  > If it happen like that it is Complicated because user maybe forgot password or username ! 

  > HTTP is stateless , to solve this problem node has a method it is called SESSION & COOKIE


 WORKING BEHIND THE SESSION AND COOKIE 
 --------------------------------------

 Client gonna log instagram First time
 _________________________________________

 when what happen........ the process given below in step by step.

  1) client send  a request into server witout anything then server will respond Please Login!
  2) client will login with Username and Password
  3) Then if server get username and password , it'll create a SESSION using password and username in serverside
  4) Server store any information about client it maybe username or password or something.. !
  5) Then server give a number to each client or client data it'll unique (we call SEssion ID)
  6) Server send The ID back into client .
  7) If clint Browser get ID , It will create Cookie using sessionID . it means 
   It is a file from client side (Browser)

 [  first login completed! ]

 Client gonna Log next time 
 _______________________________

   when what happen ?  ........ we don't want to show login page again because user logged already 
   so server should give home page as response

  1) First browser check is there any COOKIE ?
   So now we have cookie because user logged before
  2) Client give request with COOKIE to server 
  3) Server will search inside the cookie and find session ID 
  4) Server check inside the session  is there anyone existing with this ID ?
  5) if the same ID came from cookie is existing inside the session , server will respond "Yes session exist"
  6) So the server give Home page to the Client .


 Exceptions
 -----------

 1) We have the full control of our Browser  we can clear its cache , history ...etc
    so our Browser's Cookie is also our control so we can clear our cookie too. 
    if i delete cookie or cache , you opened instagram it ask you to loggin

 2) If you are in incognito window , it won't store cookie so app will ask you to login
    however, if you logged inside the incognito , after you opened instagram again in the same incognito window 
    but in this time it won't ask you to loggin.
    if we close the incognito it delete the cookie . 

------------------------------------------------------------------------------------------------------------

 21 STATUS CODE
 ________________

  Types of status codes 
  ----------------------

  > Informaitonal Responses  100 - 199
  > Succussfull responses    200 - 299
  > Redirects                300 - 399
  > Client Errors            400 - 499 
  > Server Errors            500 - 599

 importent status codes you should know !
 -----------------------------------------
 
  > 200                      Successful  OK
  > 201                      Successful and new resourse was created
  > 204                      --------
  > 400                      The server cannot understand because of client error  ex: data missed
  > 401                      Client requst has not been completed
  > 404                      Page not found !   Most common error	
  > 500                      ---------...


------------------------------------------------------------------------------------------------------------
 22  MVC arcitecture
 ____________________

  - Model View Controller

  - It is a pattern for Softwear Projects.
  - Application and its development divided into 3 intorconnected parts

  - If we do like that we can understand easily
 
    model      :- contain about database logic or informaiton.it contain the things related database
    view       :- it is for presentation  like HTML page in clearly it is the view part
    controller :- it control all the request and responds 


 How it works ?
 ________________

    > The model and view never interact each other they done through the controller.
    > Controller is the Middile man between MOdel and View.
    > If user request, it go through the controller
    > controller ask model for information based on the request.
    > Model has responsible to handle all the database logic . logic means data delete add read like that
    > After Model response back to controller , it need to interact with view to render the data to user
    > The view only present the data which controller sends   
   > View is the template, it render webpages based on data the controller sends .


------------------------------------------------------------------------------------------------------------

 23 Event Loop
 _______________

 libuv         :-  LIbrarian Unicorn Velocriaptor,  it is a C library written for node

 Thread pool   :-  Thread pool has 4 threads, it created for handle heavy duty tasks 

 eventloop
 ----------
   - It is known as HEART OF node js

   - Event loop excutes the long running oprations is synchronously
     Blocking   - sychronous
     Unblocking - Asynchernous

 HOW IS IT WORKS ?

  > if clint send a request it maybe Blocking or Unblocking   
  it'll store inside the event queue 

  > Even loop check each data , if the data is to be excuted immediately  
  the event loop manage it , and give respones to the clint

  > If the data  that takes time to excute , it is put into thread pool

  > the thread pool manage that type data . Multi tasking will happen there

  > Thread pool give each task and  it'll be given each thread's .

  > After the processing the thread pool give the data to even loop . 

  > the loop give response to the clint.


------------------------------------------------------------------------------------------------------------

 24 YARN
 _______

  - Yet Another Resourse Nagotiator (YARN)
  - NPM & YARN are package managers used for Javascript coding , They work with node
  - It created by facebook.

------------------------------------------------------------------------------------------------------------

 25 OPTION METHOD
 ________________
 
  HTTP method to retrieve available resource communication options, commonly used in CORS.

------------------------------------------------------------------------------------------------------------


 26 CORS (Cross-Origin Resource Sharing):
 ______________________________________

  CORS is a security mechanism implemented in web browsers that allows web applications 
  running in one domain to request resources from anoth er domain in a controlled manner.

------------------------------------------------------------------------------------------------------------

 27 PREFLIGHT
____________
 
  In the context of CORS, preflight refers to an additional HTTP OPTIONS request that is 
  sent by a web browser to a server before making a cross-origin request using certain methods or headers.


------------------------------------------------------------------------------------------------------------
 28 HBS 
 ______

  (Handlebars) is a popular templating engine for Node.js that allows 
  dynamic rendering of HTML templates.


------------------------------------------------------------------------------------------------------------

 GET AND POST 
 ____________
  "Get" and "post" are HTTP methods.

     Get  :-  requests retrieve data from a server,
     post :-  sends data to be processed or stored on a server.


------------------------------------------------------------------------------------------------------------
 CHILD PROCESS
 _____________

  A child process in Node.js is a separate process spawned from the main Node.js process. 
  It is used for executing external commands, running heavy tasks in parallel, 
  and interprocess communication.

------------------------------------------------------------------------------------------------------------

 TRACE
 _____
 
 TRACE is an HTTP method used for diagnostics, but it is not supported
 in Node.js due to security concerns

------------------------------------------------------------------------------------------------------------
 APP.ALL
 _______

  The app.all() function is used to route all types of HTTP requests. 
  Like if we have POST, GET, PUT, DELETE, etc, requests made to any specific route, 
  let’s say /user, so instead of defining different 
  APIs like app.post(‘/user’), app.get(‘/user’), etc, we can define
  single API app.all(‘/user’) which will accept all type of HTTP request. 

------------------------------------------------------------------------------------------------------------

 NODE CONCURRENCY 

  Node.js is single-threaded by default, but it can handle concurrency through 
  non-blocking asynchronous operations and event-driven architecture.

------------------------------------------------------------------------------------------------------------
 
 require vs import

  require (CommonJS):
       Used for synchronous module loading.
       Commonly used for older code and existing modules.
   
  import (ES6 Modules):
      Used for asynchronous module loading.  
      Recommended for modern code and new projects.

------------------------------------------------------------------------------------------------------------

 LIBRARY VS FRAMEWORK

 Library:

  A collection of pre-written functions for specific tasks.
  You use it as needed, retaining control over your application's structure.

 Framework:

  A structured foundation with predefined rules.
  Dictates the overall architecture and flow of your application.
  You work within the framework's structure, customizing it to your needs.

------------------------------------------------------------------------------------------------------------

 PREFLIGHT REQUEST

  preflight request, is a type of HTTP request made by web browsers to check if a 
  web application running at one origin (domain) is allowed to access resources on another origin.

  Before the actual request is sent, the browser sends an HTTP OPTIONS request (preflight request)
  to the target domain to check if the cross-origin request is permitted.

------------------------------------------------------------------------------------------------------------

 Types of preflight requests in CORS:

  Simple Request: No preflight, includes GET, POST, HEAD with simple headers.
  Preflight Request: HTTP OPTIONS sent for non-simple requests to check server permissions.
  Non-Preflighted Request: Direct request when server allows cross-origin without preflight.

------------------------------------------------------------------------------------------------------------

 CORS (Cross-Origin Resource Sharing) Headers:

  Origin: Indicates the requesting site's origin.
  Access-Control-Allow-Origin: Specifies allowed origins.
  Access-Control-Allow-Methods: Lists allowed HTTP methods.
  Access-Control-Allow-Headers: Specifies allowed request headers.
  Access-Control-Expose-Headers: Lists exposed response headers.
  Access-Control-Allow-Credentials: Enables or disables credential inclusion.
  Access-Control-Max-Age: Sets how long preflight results can be cached.

------------------------------------------------------------------------------------------------------------

 STREAMS

  Streams allow you to work with data in smaller chunks, reducing memory consumption. 
  This is crucial when dealing with large files or data sets.

  Streams in Node.js are objects that allow you to read or write data in chunks, 
  making it efficient for handling large amounts of data. 

  There are four types:
              Readable Streams :   Used for reading data from a source.
              Writable Streams :   Used for writing data to a destination.
              Duplex Streams   :   Allow both reading and writing.
              Transform Streams:   Special duplex streams for data processing.

------------------------------------------------------------------------------------------------------------

 BUFFER
 
  A buffer in Node.js is a temporary data storage area used to store raw binary data. It is particularly 
  useful when dealing with streams of data, file operations, network communications, or any situation where 
  it's important to efficiently handle binary data. 

------------------------------------------------------------------------------------------------------------

 PIPING

  Piping in Node.js is a way to stream data from one source to another

   Eg;   const fs = require('fs');

         const readableStream = fs.createReadStream('input.txt');
         const writableStream = fs.createWriteStream('output.txt');

         readableStream.pipe(writableStream);

         console.log('Data is being piped...');

------------------------------------------------------------------------------------------------------------

 QUERY PARAMETER

  Query parameters are key-value pairs included in a URL to pass information to a
  web server for processing, commonly seen after the question mark in a URL.

------------------------------------------------------------------------------------------------------------

 URL ENCODED 
 
  URL encoding is a method of converting special characters and spaces in a URL to a format 
  that can be safely transmitted over the internet.

------------------------------------------------------------------------------------------------------------

 CONTROL FLOW FUNCTIONS

  Control flow functions are programming constructs used to manage the order in 
  which instructions are executed, such as loops and conditional statements.

  common control flow functions include if, else, switch, for, while, and do-while.

------------------------------------------------------------------------------------------------------------

 DYNAMIC ROUTING

  Dynamic routing refers to the process of handling different URL paths dynamically in a 
  web application, often used in routing frameworks like Express.js in Node.js.

       app.get('/users/:id', (req, res) => {
          const userId = req.params.id;
          res.send(`User ID: ${userId}`);
       });
   
------------------------------------------------------------------------------------------------------------

 ROUTER CHAINING

  Router chaining is a technique in web development where multiple routers or middleware 
  functions are sequentially applied to process HTTP requests in a specific order.

------------------------------------------------------------------------------------------------------------

 WRITE HEAD

  "WriteHead" could refer to the response header in web development, where you set properties 
  like status code and content type before sending a response to the client.

------------------------------------------------------------------------------------------------------------

 SET HEAD
 
  "SetHead" likely refers to setting HTTP response headers in web development to provide metadata 
  and instructions to the client browser or application

------------------------------------------------------------------------------------------------------------

 LIBUV

  Express, a Node.js framework, utilizes the libuv library to manage asynchronous operations efficiently. 
  This enables Express to handle multiple concurrent requests and I/O operations smoothly.

------------------------------------------------------------------------------------------------------------

 HTTP VS HTTPS

  HTTP:
    Unsecured protocol for internet data transfer.
    Data is transmitted in plain text.
    Vulnerable to interception and manipulation.

  HTTPS:
    Secured version of HTTP.
    Uses encryption (SSL/TLS) for data protection.
    Prevents interception and manipulation of data.
    Essential for secure transactions and sensitive data.


------------------------------------------------------------------------------------------------------------
 RESTful API 

   RESTful API is an interface that two computer systems use to exchange information securely over the internet.

------------------------------------------------------------------------------------------------------------
 CRON -JOB
 
   A cron job in Node.js refers to the scheduling of tasks to be executed at specific times or intervals.
   This can be useful for automating repetitive tasks, such as sending email notifications, 
   cleaning up files, or fetching data from external sources.

   Eg: const cron = require('node-cron');

       cron.schedule('30 14 * * *', () => {
         console.log('Task executed at:', new Date());
       });


------------------------------------------------------------------------------------------------------------

 CLUSTORING

    Clustering in Node.js allows you to create multiple instances (workers) of your application that can handle
    incoming requests. This can lead to better utilization of multi-core systems and improved performance.

------------------------------------------------------------------------------------------------------------
 NET 

   net module provides a way to create servers and work with network connections using the 
   TCP (Transmission Control Protocol) protocol. It allows you to build networking applications 
   such as web servers, chat servers, or custom protocols.

------------------------------------------------------------------------------------------------------------

WEB HOOK 
 A webhook is a type of API endpoint that allows two applications to communicate with each other asynchronously.
 When an event occurs in one application, it can trigger a webhook to be sent to the other application. 
 The receiving application can then take some action based on the event data.

------------------------------------------------------------------------------------------------------------

REST:

  Architecture for networked applications.
  Stateless, client-server communication.
  Each resource has a unique URL endpoint.
  Server determines response data structure.
  May require versioning for changes.


GraphQL:

  Query language for APIs.
  Clients request specific fields and relationships.
  Clients define response structure.
  Often doesn't require versioning.
  Great for fine-grained control and complex data.

------------------------------------------------------------------------------------------------------------

CLUSTER WORKER 

Cluster workers are child processes that are spawned by the Node.js cluster module. 
They run simultaneously and share the same server port. Each worker has its own event loop, 
memory, and V8 instance. Workers communicate with each other and with the parent process using IPC (Inter-process communication).


------------------------------------------------------------------------------------------------------------

LOCAL STORAGE AND SESSION STORAGE

Local storage:
      Data stored in local storage persists even after the browser is closed and reopened.
      Local storage has a larger storage capacity than session storage.
      Local storage is shared across all tabs and windows of the same browser.

 Local storage is useful for storing data that needs to be persisted across browser sessions, 
 such as user preferences, login credentials, and offline data.

Session storage:
      Data stored in session storage is cleared when the browser is closed or when the user navigates to a different website.
      Session storage has a smaller storage capacity than local storage.
      Session storage is isolated to the current tab or window.
      When to use local storage

When to use session storage
Session storage is useful for storing data that is only needed for the current browser session,
such as shopping cart items and temporary data.



---------------------------------------------- NOTES  -----------------------------------------------------

_Node js_ - Open source server side javascript runtime environment built on chrome V8 engine.
It is single threaded.
_runtime environment_ It provide all functionality for program to run.
_control flow_ - order of code is being executed
_modules_ - encapsulated code which perform specific functiionality, which can be imported
_lodash_ is js library provide utility function for doing common programming task, like manipulating array object and string
_Types of modules_ 
    - Core Modules.
		- Local Modules.
		- Third Party Modules.
_HTTP_ - used to transfer data between server and client
_HTTP methods_
            - Get - to request data from server
            - Post - send data to server often result in creation of resource.
            - Put - used to update existing data.
            - Patch - partialy update existing resource
            - Option - show available methods
            - Delete -delet resource
            - Connect- establish connection
- Trace - used for debugging, it return exact request
_Middlewares_ - middlewaare fuctions that receive request and execute between request and response
_application level middleware_ - is applied to entire application it can be added using `app.use()`
_rotuter level middleware_ - is applied to specifinc route. `route.use()`
_error handling middleware_ - used to handle error, it is added at end and add using `app.use()`
_built in middleware_ - middleware provided by framework or platform.
_3rd party  middleware_ - created by developers
_express.urlencoded()_ - build in middleware in express to parse url encoded data received in request
_expres.json()_ - parse JSON payloads received.
_express.static()_ - used to serve static file(HTML, CSS, JS).
_express.cookie()_ - access  and set cookie.
_express.session()_ - used to manage session.
_callback_  - A callback is a function that is passed as an argument to another function and is intended to be executed at a later time or in response to a specific event or condition.
_nextTick_ - excute immediatly after current phase
_next tick_ - is used to schedule a callback event to executed on next iteration of event loop. immediately after the current operation completes. before any I/O operation
_set timeout 0_  - set timeout execute after pending tasks in the task queue
_set immediate_ - set immediate execute immediatly in next iteration of event loop, after any I/O operation
setImmediate() is designed to execute a script once the current poll phase completes
_Event loop_ - event loop allow nodejs to perform non-blocking io operations by off loading operations to system kernal
_microtask_ priority is promise.
_Buffer class_  - used to create buffer
_buffer_ - temperory storage for binary data before it is used.
_Http modules_ - 
_package.json_ - contain meta data about application
_query parmeter_ - they are append to end of url after question mark, they are passed as key value pair and used to pass additional information to webserver
_Session and cookie_ both are used to maintain state information between client and server.
Cookies - stored on client side, and sent to sever on every requset made by client
Session -  stored on server side, more secure than cookies since data is stored on server side, used for session mangemnt  
_View engine_ - or template engine used to render dynamic content.
_hbs_ - tmplate engine
_cors_ -by default  browser restrict request to different origin. Cors allow browser to make request to differen origin 
_pre flight_ - request send by browser to check cross-origin request is allowed.
it contains
Origin: the server name
Access-Control-Request-Method: the HTTP methods that will be used
Access-Control-Request-Headers: the keys that will be in the headers
_append file_ - add new content withour overwriting
_global execution context_ - top level environment in which js code runs
_pm2_ - procees manager for node js apps, it is used to manage and deploy node apps in production environment
_error handling in express_ - used to handle error
```
app.use((err, req, res, next) => {
  // Error handling logic
});
```
_child process_ -  new process that is created by the parent process. The child process can be used to run a separate command, or to communicate with the parent process.
_spawn()_ - create new (child process) process from scratch
_fork()_ - create child procees that is copy of parent
_app.set_ - set configuration values `app.set('view engine', 'hbs')`
_app.use_ - mount middle ware at applicatioN level.
_app.all()_ used to specify middleware for all http methods in specified path
_global object_ - object available in all module
_stream_ - is used to handle large data, to read and write data in continous manner
Stream refers to reading from or writing to a location in continous manner
-_Readable Stream_ - streams from which data can be read
-_Writable Stream_ - streams from which data can be read.
-_Duplex stream_ - streams that are both Readable and Writable
-_transform stream_ - streams that can modify or transform the data
_punycode_ - it is method used ot represent Unicode in ascii format
_Event emitter_ - is used to create event emitter and register event listener
```
const EventEmitter = require('events');
const myEmitter = new EventEmitter();
myEmitter.emit('myEvent', arg1, arg2);
myEmitter.on('myEvent', (arg1, arg2) => {
  console.log('Event received with arguments:', arg1, arg2);
});
```
It is used in asynchronous operations, bulding cutom event driven-API, implementing event based frameworks.
_DNS_ - trnslate human redable domain name into IP address
_Cookies_ - small piece of data stored by web browser, which is used for session management, tracking etc
_MVC_ - architectural pattern used for designing web applications
_Model_ - Model is responsible for storing and manipulating data
_Views_ - Responsible for presenting data to user
_Control_ - it act as intermediary between model and view, it handle user interaction and update model if necessary
_status code_ - three-digit code that a server sends to a browser in response to a request. 
1xx - informative - server received request and start processing it
2xx - success - server received, understood and processed request
3xx - redirection
4xx - client error - client has made error in request
5xx - server error - server encoundered error while processing request
_body parser_ - parse data in request body and make it available for application
_npm_ - package manager for for nodejs
_npx_ - used to execute node packages without installing them on our system.
_fs module_ - used to work with file system
  - _fs.readFile_ - read
  - _fs.writeFile_ - write, it replace existing data, if file does not exist it create new
  - _fs.open_ - open file, with flag to read or write, if file does not exist it will create new file.
  - _fs.append_ - append
  - _fs.unlink_ - delete file.
_http_ - used for creting server and handling http request and response
_path_ - used to handle file path
_Os_ - provide information about operating system
_utils_ - contain utility fucntiion like formating string, inspecting object etc.
_event_ - used to create event listener
_crypto_ - used to for cryptographic operation like hashing, encryption, decryption
_url_  -  for parsing and formatting URLS
_querystirng_ - used for formatting query string and handling URL parameters.
_REST API_ - (Representational State Transfer) - set of rules for building web servers that allow applications to acces resources in other application.
_Axios_ - third party library, it automaticlly convert response into json, it has larger functionalities.
_Fetch_ - build in browser, we have to convert response into json.
_res.writeHeader_ - allows you to status code, content, and multiple headers.
_res.setHeader()_ - allows you only to set a singular header.
_res.write()_ - Can be called multiple times to send multiple chunks of data,.
_res.send()_ (res.write + res.end()) - send string to client
_res.json()_ - send JSON to client
_res.html()_ - send HTML to client
_res.redirect()_ - It will redirect client to new URL
_res.status()_ - it set status code of response
_res.cookie()_ - it will set cookie on client browser
_res.render()_ - to rende a view
_res.end()_ - this method ends the response and close connection to client
_Views_ - in Node.js are templates that are used to render HTML pages
_require_ - used to import modules, it is synchronous, can only used for importing modules, can be called anywhere.
_import_ - Asynchronous, can used to import individual exports, introducced in ES6, , must be called in top of file.
_piping_ - sending data from on stream to another stream
_dynamic routing_ - allows you to match parts of a URL path with variables
_router chaining_ - Router chaining in Express refers to the practice of using multiple router instances 
_Router_ - handle http requests, It route request to appropraite handler
_Routing_ - directing HTTP request to differernt part of application based on request path.
_REPL_ - Read evaluate print loop, allow us to interact with node from command line.
_Clustering_ - in Node.js is a technique that allows you to take full advantage of multi-core processors by creating multiple Node.js processes, often referred to as "worker processes.

_Node Concurency_ - it enable node js to handle large number of I/O operations simultaneously, without blocking the execution thread.

_Event Loop_ - Here is an example of how the event loop works:
A user makes a request to a Node.js server.
The event loop receives the request and adds it to the event queue.
The event loop continues to listen for other events.
Another user makes a request to the Node.js server.
The event loop receives the request and adds it to the event queue.
The event loop continues to listen for other events.
The first request is finished processing.
The event loop removes the first request from the event queue and executes the corresponding callback function.
The second request is finished processing.
The event loop removes the second request from the event queue and executes the corresponding callback function.
