const express = require("express");
const bodyParser = require("body-parser");
const {port} = require("./config/serverconfig")
const CityRepository = require("./repository/city-repo.js");
const apiRoutes = require('./routes/index.js')

const setupAndStartServer = async () => {
    //create express object
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.use('/api', apiRoutes);

    app.listen(port,()=>{
        console.log(`server started at ${port}`)
    })
}
setupAndStartServer();