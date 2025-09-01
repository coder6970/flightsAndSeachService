const express = require("express");
const bodyParser = require("body-parser");
const {port} = require("./config/serverconfig")
const apiRoutes = require('./routes/index.js');
const {City,Airport} = require ('./models/index.js');
const db = require("./models/index.js");

const setupAndStartServer = async () => {
    //create express object
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.use('/api', apiRoutes);

    app.listen(port,async()=>{
        console.log(`server started at ${port}`);
         if(process.env.SYNC_DB)db.sequelize.sync({alter : true});
        //  const city = await City.findOne({
        //     where:{
        //         id:17
        //     }
        // });
        // const airports = await city.getAirports();

        // console.log(city,airports);
        
    })
}
setupAndStartServer();