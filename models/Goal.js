const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalSchema = new Schema({

    date: {
        type: String,
    },
    student: {
        type: Schema.Types.ObjectId,
        ref: "Student"
    },
    goalData: [{
        goalId: { //from Student Schema
            type: String
        },
        options: {
            type: Array
        },
        note: {
            type: String
        },
        recordedBy: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    }],
    comment: {
        type: String
    }
})

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal
