const assert = require("assert");
const funcs = require("../index");

describe("Rendering with Pug", function(){
    it("will do it", function(done){
        const req={};
        const res = {
            send : function(html){
               assert(html.length > 0);
               console.log(html);
               done();
            }
        } 
        funcs.helloWorld(req,res);
    });
});