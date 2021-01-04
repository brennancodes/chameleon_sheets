const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        firstName: {
            type: String,
            require: "Student must have a first name"
        },
        lastName: {
            type: String,
            require: "Student must have a last name"
        }
    },
    goals: [{
        label: {
            type: String
        },
        description: {
            type: String
        },
        type: { //Binary, Raw Percent, Successes/Opportunities, Notes
            type: String
        },
        options: { //Used by Binary and Successes/Opportunities
            type: Array
        }
    }],
    classRoom: {
        type: String
    },
    hours: {
        type: Number,
        default: 6
    },
    startTime: {
        type: String,
        default: "0800"
    },
    createdAt: {
        type: Date,
        default: Date.Now
    },
    updatedAt: {
        type: Date,
        default: Date.Now
    },
    recordedBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;