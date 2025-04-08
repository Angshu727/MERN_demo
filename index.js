const fs = require("fs");
const http = require("http");

const productData = fs.readFileSync("./data/product.json","utf-8");
const productTemplate = fs.readFileSync("./public/index.html","utf-8");

const server = http.createServer((req,res) =>{
    const pathname = req.url;
    if ( pathname === "/"){
        res.writeHead(200);
        res.end(productTemplate);
    }
    else if(pathname === "products"){
        res.writeHead(200);
        res.end("hello from product page");
    }
    else if(pathname === "/api"){
        res.writeHead(200,{
            "content-type":"application/json"
        })
        res.end(productData);
    }
    else{
        res.writeHead(404,{
            "content-type":"text/html"
        });
        res.end("Salam Dosto");
    }
    console.log(pathname);
    // res.end("Hello from server");
});

server.listen(8000,()=>{
    console.log("listening to the incoming request PORT:8000")
});





// const textIn = fs.readFileSync("./data/text-in.txt","utf-8");

// fs.writeFileSync("./data/text-out.txt",`This is a new line\n${textIn}\nCreated On : ${Date.now()}`);
// console.log(textIn);
