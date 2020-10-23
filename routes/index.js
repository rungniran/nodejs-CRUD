var express = require('express');
var router = express.Router();
var mysql =require('../connect');



router.get('/insert', function(request, response, next) {
    response.render('insert', { 
  	    data: {}
  	});
  
});

router.post('/', function(request, response, next){
	var sql = 'INSERT INTO list_studen SET ?';
	var data = request.body;
	mysql.query(sql, data, function(error, result){
		if (error) {
			response.send(error);
		}else{
			response.redirect('/');
		}
	})
});

router.get('/edit/:idStuden', function(request, response, next){
	var sql ='SELECT * FROM list_studen WHERE idStuden = ?';
	mysql.query(sql, request.params.idStuden, function(error, result){
		if (error) {
			response.send(error);
		}else{
			response.render('edit', {data : result[0] });
		}
	})
})

router.post('/edit/:idStuden', function(request, response, next){
	var sql = 'UPDATE list_studen SET ? WHERE idStuden = ?';
	var params = [request.body, request.params.idStuden];
	mysql.query(sql, params, function(error, result){
		if (error) {
			response.send(error);

		}else{
			response.redirect('/');
		}
	});
});

router.get('/delete/:idStuden', function(request, response){
	var sql = 'DELETE FROM list_studen WHERE idStuden = ?';
	mysql.query(sql, request.params.idStuden, function(error, result){
		if (error) {
			response.send(error);
		}else{
			response.redirect('/');
		}
	})
})

router.get('/', function(request, response, next){
	var sql = 'SELECT * FROM  list_studen ';
    mysql.query(sql, (err, result) => {
    	if (err) {
            response.send(err);
    	}else{
    		response.render('index', { items: result });
    	}
    })
});


module.exports = router;

