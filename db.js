const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect('mongodb+srv://jaysojitra:jaysojitra@cluster0.ydudv.mongodb.net/sheycars-udemy',{useUnifiedTopology:true ,useNewUrlParser:true})

    const connection = mongoose.connection

    connection.on('connected',()=>{
        console.log('MongoDB connection successfully...');
    })


    connection.on('error',()=>{
        console.log('connection Error')
    })

}

connectDB();

module.exports = mongoose;

