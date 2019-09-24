var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require('cors')

var indexRouter = require('./routes/index');
var usuarioRouter = require('./routes/usuario');
var posteoRouter = require('./routes/posteo');
var categoriaRouter = require('./routes/categoria');
var comentarioRouter = require('./routes/comentario');

var app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuario', usuarioRouter);
app.use('/posteo', posteoRouter);
app.use('/categoria', categoriaRouter);
app.use('/comentario', comentarioRouter);

module.exports = app;
