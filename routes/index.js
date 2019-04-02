var express = require('express');
var router = express.Router();
var markdown = require( "markdown-it" )();
const bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres
const urlencodedParser = bodyParser.urlencoded({ extended: false });
/*var cookieParser = require('cookie-parser');

router.use(cookieParser()); */
/* GET home page. */
router.get('/', function(req, res, next) {
  /*if(req.cookies['text']){
  	console.log(req.cookies);
  	var text = req.cookies['text'];
    res.clearCookie('text', {httpOnly: true});
    htmlMarkdown = markdown.render(text);
    console.log(htmlMarkdown);
    res.render('index', { title: 'Express', htmlMarkdown: htmlMarkdown});
  } else {*/
  	res.render('index', { title: 'Express'});
  /*}*/
});

router.post('/mdown', urlencodedParser, function(req, res){
/*  res.cookie('text', req.body.text, {httpOnly: true});
  res.redirect('/');*/
  var text = req.body['text'];
  htmlMarkdown = markdown.render(text);

  res.send(htmlMarkdown);
  res.end();

});

module.exports = router;