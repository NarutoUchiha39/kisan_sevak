import mongoose from 'mongoose'

let connection;
let connection2 = null

  if(connection2==null)
   connection =  mongoose.connect(process.env.MONGODB_URI,{
    dbName:'SIH2023_Final'
}) .then(console.log('DB connected'))
.catch("DB not connected :(")

