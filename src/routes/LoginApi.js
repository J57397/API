const express = require("express");
const router = express.Router();
const path = require("path");
const sqlclient = require("mssql");
var formidable = require('formidable');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//Database configuration file

const DBconfig = require('../../config.json');
const { verify } = require("crypto");
const connectionString = DBconfig.connectionString;

//Question 1
router.get("/loginApi", function (req, res, next) {

    //get the Username and Password
    const userName = req.query.username;
    const userPassword = req.query.password;

    //Query forDatabase

    let query = "SELECT [Password] FROM UserDetail where UserId='" + userName + "'";

    //Connect to Database 
    sqlclient.connect(connectionString, function (connectionerr) {
        if (connectionerr) {
            console.log("error connecting: " + connectionerr.stack);
            res.send("DB_ERROR");
        }

        // create Request object
        let sqlrequest = new sqlclient.Request();

        // query to the database and get the records
        sqlrequest.query(query, async function (err, result) {

            if (err) {
                console.log(err);
            }
            //Close the SQL Connection
            sqlclient.close();

            //Store the Result of Database
            let resultDatabase = await JSON.parse(JSON.stringify(result.recordset));
        

            if (resultDatabase.length > 0 && typeof(resultDatabase[0]['Password']) !== 'undefined')  {
                //Compare the Password
                let userPasswordhash = resultDatabase[0]['Password'];
                bcrypt.compare(userPassword, userPasswordhash, (err, res1) => {
                    if (res1) {
                        jwt.sign({ userName, userPassword }, 'secretkey', (err, token) => {
                            if (err) {
                                res.json({
                                    msg: 'Error'
                                });
                            }
                            else {
                                res.json({
                                    token, userName //Send the Response
                                });
                            }
                        });
                    }
                    else {
                        res.sendStatus(403);
                    }
                })
            }
            else {
                res.json({
                    msg: 'Invalid Email id & Password'
                });
            }
        });

    });

});

//Question 2
router.post("/registrationApi", hashSalt, function (req, res, next) {

    //Sql Query
    let query = "INSERT INTO [dbo].[UserDetail]" +
        " ([Name],[LastName],[UserId],[Password],[Address])" +
        "VALUES ('" + req.body.firstName + "','" + req.body.lastName + "','" + req.body.userId + "','" + req.userPasswordhash + "','" + req.body.userAddress + "')";

    //Sql Connection
    sqlclient.connect(connectionString, function (connectionerr) {
        if (connectionerr) {
            console.log("error connecting: " + connectionerr.stack);
            res.send("DB_ERROR");
        }

        // create Request object
        let sqlrequest = new sqlclient.Request();

        // query to the database and get the records
        sqlrequest.query(query, async function (err, result) {
            if (err) {
                console.log(err);
            }
            //Sql Connection Close
            sqlclient.close();

            //Store the database data
            let resultDatabase = await JSON.stringify(result.rowsAffected);

            if (resultDatabase.length > 0) {
                res.json({
                    msg: 'User Created' //Send the Response
                });
            }
            else {
                res.json({
                    msg: 'Please try again!!'
                });
            }
        });

    });

});

function hashSalt(req, res, next) {

    //get the password
    const userPassword = req.body.userPassword;

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(userPassword, salt, (err, hash) => {
            req.userPasswordhash = hash; //password after hash and Salt
            next();
        })
    })
}

function verifyToken(req, res, next) {

    //get the Header value
    const header = req.headers['authorization'];

    if (typeof header !== 'undefined') {
        const bearer = header.split(' ');  //split the header with space.
        const bearerToken = bearer[1]; //get the token key.
        req.token = bearerToken;  //Send the beardToken values
        next();
    }
    else {
        res.sendSatus(403);
    }
}

//Question 3
router.get("/listApi", sqlQuery, paginatedResult(), verifyToken, function (req, res, next) {
    //paginated Result
    let result = res.paginatedResult;

    //verify the token
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        }
        else {
            res.json({
                result //send the response.
            });
        };
    })
});

function sqlQuery(req, res, next) {

    //SQL Query 

    let query = "SELECT * FROM UserDetail"

    sqlclient.connect(connectionString, function (connectionerr) {

        if (connectionerr) {
            console.log("error connecting: " + connectionerr.stack);
            res.send("DB_ERROR");
        }

        // create Request object
        let sqlrequest = new sqlclient.Request();

        // query to the database and get the records
        sqlrequest.query(query, async function (err, results) {
            if (err) {
                console.log(err);
            }

            sqlclient.close();

            //Store the database data
            let resultDatabase1 = results.recordsets;
            req.resultDatabase = await resultDatabase1[0];
            next();
        });

    });
    
}

//Question 4 

router.post("/updateUser", verifyToken, function (req, res, next) {

    let query = "UPDATE [dbo].[UserDetail]" +
        " SET [Name] = '" + req.body.firstName + "'," +
        " [LastName] = '" + req.body.lastName + "'," +
        " [UserId] = '" + req.body.userId + "'," +
        " [Address] = '" + req.body.userAddress + "' where [RowID] = '" + req.body.RowID + "'  ";

    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        }
        else {
            sqlclient.connect(connectionString, function (connectionerr) {
                if (connectionerr) {
                    console.log("error connecting: " + connectionerr.stack);
                    res.send("DB_ERROR");
                }

                // create Request object
                let sqlrequest = new sqlclient.Request();

                // query to the database and get the records
                sqlrequest.query(query, async function (err, result) {
                    if (err) {
                        console.log(err);
                    }

                    sqlclient.close();

                    //Store the database data
                    let resultDatabase = await JSON.stringify(result.rowsAffected);

                    if (resultDatabase.length > 0) {
                        res.json({
                            msg: 'User Updated'
                        });
                    }
                    else {
                        res.json({
                            msg: 'Please try again!!'
                        });
                    }
                });

            });

        };
    })
});

//Question 5
router.get("/searchAPI",sqlQuery1,paginatedResult(), verifyToken, function (req, res, next) {

    //pagination result
    let result = res.paginatedResult;

    //verify the token
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        }
        else {
            res.json({
                result //send the response
            });
        };
    })
});

function sqlQuery1(req, res, next) {

    //SQL Query 

    let query = "SELECT * FROM UserDetail where lastName = '" + req.query.lastName + "' or Name = '" + req.query.firstName + "' or UserId = '" + req.query.emailId + "' "

    sqlclient.connect(connectionString, function (connectionerr) {

        if (connectionerr) {
            console.log("error connecting: " + connectionerr.stack);
            res.send("DB_ERROR");
        }

        // create Request object
        let sqlrequest = new sqlclient.Request();

        // query to the database and get the records
        sqlrequest.query(query, async function (err, results) {
            if (err) {
                console.log(err);
            }

            sqlclient.close();

            //Store the database data
            let resultDatabase1 = results.recordsets;
            req.resultDatabase = await resultDatabase1[0];
            next();
        });

    });
    
}
function paginatedResult() {
    return async (req, res, next) => {
        const resultDatabase = req.resultDatabase
        const limit = parseInt(req.query.limit);  // get the limit
        const page = parseInt(req.query.page);    //get the page details

        //declartion for next and Previous
        const result = {};

        ///calculation for pagniation
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;


        //check the condition of next and previous
        if (endIndex < resultDatabase.length) {
            result.next = {
                page: page + 1, limit: limit
            }
        }

        if (startIndex < 0) {
            result.previous = {
                page: page - 1, limit: limit
            }
        }

        try {
            result.result = resultDatabase.slice(startIndex, endIndex); //Slice of the Object using the start index and end index
            res.paginatedResult = result; //Save the Response
            next()
        }
        catch (e) {
            res.status(500);
        }




    }
}
function verifyToken(req, res, next) {

    //get the Header value
    const header = req.headers['authorization'];

    if (typeof header !== 'undefined') {
        const bearer = header.split(' ');  //split the header with space.
        const bearerToken = bearer[1]; //get the token key.
        req.token = bearerToken;  //Send the beardToken values
        next();
    }
    else {
        res.sendSatus(403);
    }
}
module.exports = router;