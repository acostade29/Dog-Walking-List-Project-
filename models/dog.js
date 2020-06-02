const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WalkSchema = new Schema ({
    timeWalked: String,
    miles: Number,
})


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
    comments: [],
    Walk: [WalkSchema]
}, {lifeStamps: true}
);

module.exports = mongoose.model('Dog',dogSchema);