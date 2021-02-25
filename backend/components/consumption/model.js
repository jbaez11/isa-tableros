const mongoose = require('mongoose');
const Int32 = require('mongoose-int32');
const Double = require('@mongoosejs/double');

const Schema = mongoose.Schema;

const consumptionSchema = new Schema({
     eventDate : {
         type: Date,
     },
    
    processedFiles:{
        type: Number,
    },
    unprocessedFiles: {
        type: Number,
    },
    totalFiles: {
        type: Number,
    },
    processedMinutes: {
        type: Number,
    },
    unprocessedMinutes: {
        type: Number,
    },
    totalMinutes: {
        type: Number,
    },
    notes: {
        type: String,
    },
    yearMonthString:{
        type:String,
    },
    dayString:{
        type:String,
    },
    createdAt: { 
         type: Date, 
         
     },
});

const model = mongoose.model('Consumptions', consumptionSchema);

module.exports = model;