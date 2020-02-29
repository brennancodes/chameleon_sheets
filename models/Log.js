const mongoose = requrie("mongoose");
const Schema = mongoose.Schema;

const logSchema = new Schema({
    //Exporting this to another collection//
    // 24 entries//
    date: {
        type: Date,
        Default: Date.Now
    },
    student: {
        type: Schema.types.ObjectId,
        ref: "Student"
    },
    scores: [{
        time: {
            type: string
        },
        score: {
            type: Number,
            min: 0,
            max: 5
        },
        recordedBy: {
            type: Schema.types.ObjectId,
            ref: "User"
        }
    }],
    comment: {
        type: String
    },
    recordedBy: {
        type: Schema.types.ObjectId,
        ref: "User"
    }
})

const Log = mongoose.model("Log", logSchema);

module.exports = Log
