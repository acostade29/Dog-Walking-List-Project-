const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        default: "Mixed"
    },
    age: {
        type: Number,
        default: 0
    },
    owner: {
        type: Schema.Types.ObjectId,
        Ref:"User"
    },
    ownerName: {
        type: String,
    },
    address: {
        type: String,
    },
    comments: []
}, {lifeStamps: true}
);

module.exports = mongoose.model('Dog',dogSchema);