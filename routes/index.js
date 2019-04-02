const express = require('express');
const router = express.Router();
const markdown = require( "markdown-it" )();
const bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres
const urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

router.post('/mdown', urlencodedParser, function(req, res){
  var text = req.body['text'];
  htmlMarkdown = markdown.render(text);

  res.send(htmlMarkdown);
  res.end();

});

router.post('/pdfExport', urlencodedParser, function(req, res){

});

router.post('/mdExport', urlencodedParser, function(req, res){

});

module.exports = router;