'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({


    email: String,
    password: Number

});


mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/digitalId', { useMongoClient: true });

mongoose.connect('mongodb://kavitharajasekaran:Pavankumar2007@ds239439.mlab.com:39439/epds', {
    useMongoClient: true
});



module.exports = mongoose.model('user', userSchema);