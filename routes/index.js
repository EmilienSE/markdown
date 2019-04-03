const express = require('express');
const router = express.Router();
const markdown = require( "markdown-it" )();
const bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const fs = require('fs');
const pdf = require('html-pdf');
const options = { format: 'Letter' };

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Markdown converter'});
});

router.post('/mdown', urlencodedParser, function(req, res){
  var text = req.body['text'];
  htmlMarkdown = markdown.render(text);

  res.send(htmlMarkdown);
  res.end();

});

router.post('/pdfExport', urlencodedParser, function(req, res){
	//console.log(req.body['htmlMD']);
	pdf.create(req.body['htmlMD']).toStream(function(err, stream){
	  stream.pipe(fs.createWriteStream('./public/conversion.pdf'));
	  res.attachment('./public/conversion.pdf');
	  //res.send();
	  console.log(res);
	  res.end();
	  
	});
});

/*router.get('/pdfDelete', urlencodedParser, function(req, res){
	fs.unlinkSync('./public/conversion.pdf');
});*/


router.post('/mdExport', urlencodedParser, function(req, res){

});

module.exports = router;