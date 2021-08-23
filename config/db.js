const mongoose = require('mongoose');
const db = process.env.MONGO_URI;

const ConnectDB= async() =>{
    try{
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
          });

          console.log('MongoDB Connected Successfully...')
    }
    catch(error){
        console.error('Error Connecting DB : '+error.message);
        // Exit process with failure
        process.exit(1);
    }
}

module.exports = ConnectDB;