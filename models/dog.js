const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const walkSchema = new Schema ({
    
    time: {
    type: String,
    enum: ['10min','20min','30min','more'],
    },

    miles: {
       type: String, 
       enum: ['1 mile','2 miles','2+miles'],
    } 
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
    walks: [walkSchema]
}, {lifeStamps: true}
);

module.exports = mongoose.model('Dog',dogSchema);