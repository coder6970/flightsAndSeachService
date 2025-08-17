const express = require("express");
const bodyParser = require("body-parser");
const {port} = require("./config/serverconfig")
const CityRepository = require("./repository/city-repo.js");
const setupAndStartServer = async () => {
    //create express object
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.listen(port,()=>{
        console.log(`server started at ${port}`)
        const cityRepo = new CityRepository();
        
        cityRepo.createCity({name : "Delhi"});
    })
}
setupAndStartServer();