const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const agentsSchema = new Schema({
    name : String,
    identification: String,
    gender: String,
});

const model = mongoose.model('Agents', agentsSchema);

module.exports = model;