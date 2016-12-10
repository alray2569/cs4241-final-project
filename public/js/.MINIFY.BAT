
TYPE stats.js buildings.js presidents.js map.js scrollListen.js presPics.js onload.js | UGLIFYJS --screw-ie8 --mangle 1> index.min.js

TYPE stats.js d3.js | UGLIFYJS --screw-ie8 --mangle 1> d3.min.js

TYPE app.js | UGLIFYJS --screw-ie8 --mangle 1> app.min.js
