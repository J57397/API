## API
API Assignment : Where i have displayed how to create the API for Nodejs using Express Frame with Microsoft SQL Server.

The Content and Module which are used during Development of the API are:

1. **Hash & Salt :** For Hash & Salt we have used the bcrypt module of Nodejs.                                                                               
2. **Authentication :** I have used the json web token module for Authentication of the API.                                                                        
3. **Microsoft SQL Server :** To Connect with Database we have used the mssql module.                                                                           
4. **Express Framework**                                                                                                                                            

# The API which is cover during this assignment are :

# 1.Login API.   
            URL : http://localhost:8083/loginApi?username=User2@gmail.com&password=Jameer@123                                                                          
# 2.Registration API.  
            URL : http://localhost:8083/registrationApi
            Body : {"firstName" : "User 13",
                     "lastName" : "User",
                     "userId" : "User13@gmail.com",
                     "userPassword" : "Jameer@123",
                     "userAddress" : "Pune"
                    }                                                                                  
# 3.Search API.  
          URL : http://localhost:8083/listApi?page=1&limit=3
          Header : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkphbWVlckBnbWFpbC5jb20iLCJ1c2VyUGFzc3dvcmQiOiJKYW1lZXJAMTIzIiwiaWF0IjoxNjUyNzI1OTY3fQ.HDsma3ZTkE6KlRfOmnve2lqK4uDSXbfgX7WsB6c95As                                                                             
# 4.Update API.
         URL : http://localhost:8083/updateUser
         Body : {
                   "RowID" : 2,
                   "firstName" : "User 0",
                   "lastName" : "Sabkhan",
                   "userId" : "User0@gmail.com",
                   "userPassword" : "Jameer@123",
                   "userAddress" : "Pune"
                   }
                   
          Header : Bearer               eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkphbWVlckBnbWFpbC5jb20iLCJ1c2VyUGFzc3dvcmQiOiJKYW1lZXJAMTIzIiwiaWF0IjoxNjUyNzI1OTY3fQ.HDsma3ZTkE6KlRfOmnve2lqK4uDSXbfgX7WsB6c95As
                                                                                                 
# 5.Search List API.   
          URL : http://localhost:8083/searchAPI?firstName=User 1&lastName=&emailId=user13@gmail.com&mobileNo=1234567890&page=1&limit=6
          Header : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkphbWVlckBnbWFpbC5jb20iLCJ1c2VyUGFzc3dvcmQiOiJKYW1lZXJAMTIzIiwiaWF0IjoxNjUyNzI1OTY3fQ.HDsma3ZTkE6KlRfOmnve2lqK4uDSXbfgX7WsB6c95As                                                


# Please Follow below procedure before runnning the code.

1.Download the Database and restored in your SQL Instance.                                                                                                 
2.Change the configuration of your database in config.json.                                                                                                     
3.By Default Application will run on Port 8083. if you want you can change the Port Setting in app.js.                                                                
  
