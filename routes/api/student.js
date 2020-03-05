const router = require("express").Router();
const db = require("../../models")


router.route("/new")
    .post((req, res) => {

        let student = {
            name: {
                firstName: req.body.firstName,
                lastName: req.body.lastName
            },
            classRoom: req.body.classRoom,
            hours: req.body.hours,
            startTime: req.body.startTime,
            recordedBy: req.body.user
        }

        db.Student.create(student).then(newStudent =>{
            res.json(newStudent);
        })
    })


module.exports = router;