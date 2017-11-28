const functions = require('firebase-functions');
const pug = require("pug");


 exports.helloWorld = functions.https.onRequest((req, res) => {
    const compiled = pug.compileFile("views/hello.pug");
    const rendered = compiled();
    res.send(rendered);
 });
