const dns = require('node:dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

require('dotenv').config()

const server = require('./src/app')
const connectedToDB = require('./src/config/dataBase')
 
server.listen(3000 , ()=>{
    console.log('server has been created at port 3000')
})

connectedToDB()