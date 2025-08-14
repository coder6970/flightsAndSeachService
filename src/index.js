const express = require("express");
const bodyParser = require("body-parser");
const {port} = require("./config/serverconfig")
const setupAndStartServer = async () => {
    //create express object
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.listen(port,()=>{
        console.log(`server started at ${port}`)
    })
}
setupAndStartServer();