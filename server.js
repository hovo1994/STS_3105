var express = require("express");
var app = express();
var path = require("path");
var fs = require('fs');
var port = 8000;
var http = require('http');
var url = require('url');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/cases', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/caseStudies.html'));
});

app.get('/interview', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/interview.html'));
});

app.get('/analysis', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/analysis.html'));
});
app.get('/game', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/game.html'));
});

app.get('/cpr.mp4', function(req, res) {
    fs.readFile(path.resolve(__dirname + '/public/vids', "cprauto.mp4"), function(err, data) {
        if (err) {
            throw err;
        }
        var movie_mp4 = data;
        var total = movie_mp4.length;
        var range = req.headers.range;
        // console.log(req.headers);

        var positions = range.replace(/bytes=/, "").split("-");
        var start = parseInt(positions[0], 10);
        // if last byte position is not present then it is the last byte of the video file.
        var end = positions[1] ? parseInt(positions[1], 10) : total - 1;
        var chunksize = (end - start) + 1;
        res.writeHead(206, {
            "Content-Range": "bytes " + start + "-" + end + "/" + total,
            "Accept-Ranges": "bytes",
            "Content-Length": chunksize,
            "Content-Type": "video/mp4"
        });
        res.end(movie_mp4.slice(start, end + 1), "binary");
    });

    // body...
});
app.get('/lift.mp4', function(req, res) {
    fs.readFile(path.resolve(__dirname + '/public/vids', "Automated_Lift.mp4"), function(err, data) {
        if (err) {
            throw err;
        }
        var movie_mp4 = data;
        var total = movie_mp4.length;
        var range = req.headers.range;
        // console.log(req.headers);

        var positions = range.replace(/bytes=/, "").split("-");
        var start = parseInt(positions[0], 10);
        // if last byte position is not present then it is the last byte of the video file.
        var end = positions[1] ? parseInt(positions[1], 10) : total - 1;
        var chunksize = (end - start) + 1;
        res.writeHead(206, {
            "Content-Range": "bytes " + start + "-" + end + "/" + total,
            "Accept-Ranges": "bytes",
            "Content-Length": chunksize,
            "Content-Type": "video/mp4"
        });
        res.end(movie_mp4.slice(start, end + 1), "binary");
    });

    // body...
});
app.get('/cprinterview.mp4', function(req, res) {
    fs.readFile(path.resolve(__dirname + '/public/vids', "Lucas_2.mp4"), function(err, data) {
        if (err) {
            throw err;
        }
        var movie_mp4 = data;
        var total = movie_mp4.length;
        var range = req.headers.range;
        // console.log(req.headers);

        var positions = range.replace(/bytes=/, "").split("-");
        var start = parseInt(positions[0], 10);
        // if last byte position is not present then it is the last byte of the video file.
        var end = positions[1] ? parseInt(positions[1], 10) : total - 1;
        var chunksize = (end - start) + 1;
        res.writeHead(206, {
            "Content-Range": "bytes " + start + "-" + end + "/" + total,
            "Accept-Ranges": "bytes",
            "Content-Length": chunksize,
            "Content-Type": "video/mp4"
        });
        res.end(movie_mp4.slice(start, end + 1), "binary");
    });

    // body...
});

app.listen(port);

console.log("Running at Port " + port);
