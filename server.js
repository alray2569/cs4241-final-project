/* jshint esnext: true, node: true */
/*
  Improved server, based (very loosely) on the script provided from
  the WPI CS4241 course.
  Author: Andrew Ray

  Supports:
     Direct full-path requests: http://domain/path will load the file at /path, if it exists
     Directory index requests:  http://domain/path will load the file at /path/indexname, 
         if it exists and /path is not a file
     File requests w/o ext:     http://domain/path will load the file at /path.assumeext, if it 
         exists and /path is not a file or a directory, and does not already have an extension
     404 Handling:              http://domain/path will load the file at /path404, in other
         cases. If /path404 does not exist, then no content will be served.

  Logging:
      All requests are logged to console. The path that was assumed by the system, and the
      status code it returned are listed. 
 */
const exts = {"html": "text/html",
			  "css" : "text/css",
			  "js"  : "application/javascript",
			  "png" : "image/png",
			  "txt" : "text/plain",
			  "ico" : "image/vnd.microsoft.icon",
			  "json": "application/json",
			  "md"  : "text/markdown",
			  "svg" : "image/svg+xml",
			  "default" : "text/html"
			 };

const path404 = "404.html"; // path to 404 error page
const path403 = "403.html"; // path to 403 error page
const indexname = "index.html"; // index pages will be located at this file in each folder
const assumeext = "html"; // extension to assume if none given
const defport = 8080; // port to use if process.env.PORT not set

var http = require('http'),
    fs   = require('fs'),
    url  = require('url'),
    port = process.env.PORT || defport,
    pad = require('pad');

function log (path, status, type) {
	type = type || "";
	
	if (path.length < 25) {
		console.log(pad(path,25) + status + "  " + type);
	}
	else {
		console.log(path);
		console.log(pad("",25) + status + "  " + type);
	}
}

var server = http.createServer( (req, res) => {
    var stats, path, ext, mime;
    var uri = url.parse(req.url);
    
    path = uri.pathname;
    path = "public" + path;

    if ((path.substr(path.lastIndexOf("/") + 1,1) === ".") ||
	    (path.includes(".."))) {
		// permission denied, file was private
		fs.readFile(path403, (error, content) => { // Load the 404 page!
			res.writeHead(403); 
			if (error) { // could not load 403 page. Should just end response here.
				res.end();
				console.log(path + ": 403 Forbidden, and 403 page could not be loaded.");
			}
			else {
				res.end(content, {'Content-type': 'text/html'});
				console.log(pad(path, 25) + "403  ");
			}
		});
		
		return;
    }
    
    if (path.toLocaleLowerCase() === "public/readme.md") {
		path = "public/../README.md";
	}
	
    ext = path.substring(path.lastIndexOf(".") + 1);
    mime = exts[ext] || exts.default;

    if (!path) path = indexname; // check edge case where the path is now empty (no directory component)
    
    try {
	stats = fs.lstatSync(path);
	if (stats.isDirectory()) { // handle case where path is a directory
	    path += "/" + indexname; // append /index.html to get the index for that directory
	}
    }
    catch (e) { // this will trigger if the path doesn't point to something.
	if (!path.includes(".")) {
	    path += "." + assumeext; // handle the case where a file was requested with no extension; assume html
	}
    }

    /*
      There is an edge case where a directory path that already ended in a slash will
      result in a double slash in the final path. Replace that double slash with a
      single slash. In HTTP, double slashes and single slashes are equivalent, but
      can break some server and client scripts.
     */
    path = path.replace(/\/\//g, '/');

    fs.readFile(path, (error, content) => {
		
		if (error) {
			fs.readFile(path404, (error, content) => { // Load the 404 page!
				res.writeHead(404); 
				if (error) { // could not load 404 page. Should just end response here.
					res.end();
				}
				else {
					res.end(content, {'Content-type': 'text/html'});
				}
				log(path, 404);
			});
		}
		else {
			res.writeHead(200, {'Content-type': mime});
			res.end(content, 'utf-8');
			log(path, 200, mime);
		}
	});
    
});

server.listen(port);
console.log('Process listening on '+port);
