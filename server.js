/**
 * Created by dell on 2016/9/19.
 */
'use strict';
var express = require('express');
var path = require('path');
var glob = require('glob');
var bs = require('browser-sync').create();
var app = express();


app.set('views', path.join(__dirname, 'jade/'));
app.set('view engine', 'jade');
app.use(express.static('public'));


//路由
glob.sync('jade/**/*', {
    ignore: [
        'jade/_layout/**',
        'jade/_includes/**'
    ]
})
.forEach(function (file) {
    var filename = file.replace(/jade\//, '');
    var route = filename.replace(/\.jade$/, '');
    console.log(' * ' + route);

    if(route == 'index') {
        route = '';
    }

    app.get('/'+ route, function (req, res) {
        if (req.url !== 'favicon.ico') {
            res.render(route);
        }
    });
});

//监听
app.listen(8080,function(){
    bs.init({
        open: true,
        ui: false,
        notify: false,
        proxy: 'localhost:8080',
        files: ['./jade/**/*','./stylus/**/*','./public/js/**/*'],
        port: 8080
    });
    console.log('wt (dev) is going to be running on port 8080 (by browsersync).');
});