//var express = require("express");
//var router = express.Router();
//var async = require("async");

// Require the driver.
var pg = require('pg');

var connectionString = process.env.DATABASE_URL || 'postgresql://root@localhost:26257?sslmode=disable';
var client = new pg.Client(connectionString);

/****
Data
****/
input('/insert', function(req, res){

	try{
	    // Get a Postgres client from the connection pool
	    pg.connect(connectionString, function(err, client, done) {
	        // Handle connection errors
	        if(err) {
	          done();
	          console.log(err);  
	          return res.status(500).json({ success: false, data: err});
	    }


	        // Send data
	        client.query("INSERT INTO eid.users (id, last, first, bday, gender, fbid) VALUES($1, $2, $3, $4, $5, $6);", [userInfo.id, userInfo.lastName, userInfo.firstname, "20011101", userInfo.gender, "ddd"], function (err, result) {
				done();
				res.send();

			    if (err) {
			      return console.error('error happened during query', err)
			    }
			});
		});
	} catch (ex) {
	    callback(ex);
	}
});


/******
INSERT
******/
/*router.post('/insert', function(req, res){

	try{
	    // Grab data from http request
	    var data = {name: req.body.accountName, balance: req.body.accountBalance};

	    // Get a Postgres client from the connection pool
	    pg.connect(connectionString, function(err, client, done) {
	        // Handle connection errors
	        if(err) {
	          done();
	          console.log(err);  
	          return res.status(500).json({ success: false, data: err});
	        }


	        // Insert customer
	        client.query("INSERT INTO bank.accounts (name, balance) VALUES($1, $2);", [data.name, data.balance], function (err, result) {
				done();
				res.send();

			    if (err) {
			      return console.error('error happened during query', err)
			    }
			});
		});
	} catch (ex) {
	    callback(ex);
	}
});*/

/******
BALANCES
******/
/*router.get('/balances', function(req, res){

	try{
	    // Get a Postgres client from the connection pool
	    pg.connect(connectionString, function(err, client, done) {
	        // Handle connection errors
	        if(err) {
	          done();
	          console.log(err);
	          return res.status(500).json({ success: false, data: err});
	        }

	        var accountTable = '<table class="table table-striped table-bordered"><tr><th>User</th><th>Balance</th></tr>';

	        var query = client.query("SELECT name, balance FROM bank.accounts;");

			query.on('row', function(row) {
				accountTable = accountTable + '<tr><td>' + row.name + '</td><td>' + row.balance +' </td></tr>';
			 });

        	query.on('end', function() {
        		accountTable += "</table>";
			    if (err) {
			      throw (err);
			  	}
			  	done();
			  	res.send(accountTable);

        	});

        	query.on('error', function(err) {
	          console.log(err);
	          res.status(500).json({ success: false, data: err});
	          done();
        	});

		});
	} catch (ex) {
	    callback(ex);
	}
}); */

/******
MORE MONEY
******/
/*router.post('/moremoney', function(req, res){

	try{
	    // Get a Postgres client from the connection pool
	    pg.connect(connectionString, function(err, client, done) {
	        // Handle connection errors
	        if(err) {
	          done();
	          console.log(err);
	          return res.status(500).json({ success: false, data: err});
	        }

	        var query = client.query("SELECT id, name, balance FROM bank.accounts;");

	        var subqueryCount = 0;
	        var subqueryCompletedCount = 0;
	        var queryCompleted = false;

	        function finish() {
	        	if(subqueryCount===subqueryCompletedCount && queryCompleted) {
					done();
			  		res.send();
	        	}
	        }

			query.on('row', function(row) {

				newBalance = row.balance * 1.05;

				var subquery = client.query("UPDATE bank.accounts SET balance = $1 WHERE id = $2;", [newBalance, row.id], function (err, result) {
				    if (err) {
				    	console.log(err);
				      throw (err);
				    }
				});

				subqueryCount+=1;
				subquery.on('end', function() {
					subqueryCompletedCount+=1;
					finish();
				});
			 });

        	query.on('end', function() {
        		queryCompleted=true;
        		finish();
        	});

        	query.on('error', function(err) {
	          console.log(err);
	          res.status(500).json({ success: false, data: err});
	          done();
        	});

		});
	} catch (ex) {
	    callback(ex);
	  }
});
*/

//module.exports = router;
