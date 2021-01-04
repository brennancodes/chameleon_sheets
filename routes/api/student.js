const router = require("express").Router();
const db = require("../../models")


router.route("/new")
    .post((req, res) => {

        let student = {
            name: {
                firstName: req.body.firstName,
                lastName: req.body.lastName
            },
            hours: req.body.hours,
            startTime: req.body.startTime,
            recordedBy: req.body.user
        }
        // console.log(req.user, "req.user -- line 17");
        db.Student.create(student).then(newStudent => {
            res.json(newStudent);
        }).catch(err => {
            res.json(err);
            console.log(err);
        });
    });

router.route("/all")
    .get((req, res) => {
        db.Student.find({}).then(results => {
            // console.log(results)
            res.json(results);
        })
            .catch(err => {
                res.json(err);
                console.log(err);
            });
    });

router.route("/byID/:id")
    .get((req, res) => {
        // console.log(req.params.id)
        if (req.params.id) {
            db.Student.find({ _id: req.params.id }).then(result => {
                console.log("student api 44")
                res.json(result);
            }).catch(err => {
                res.json(err);
                console.log(err);
            });
        } else {
            res.end();
        }
    });

router.route("/addStudentGoal")
.post((req, res) => {
    console.log(req.body.newGoal.studentId + "line 56 student api");
    console.log(JSON.stringify(req.body) + " ASG goals body")
    db.Student.findByIdAndUpdate({ _id: req.body.newGoal.studentId }, { $push: {goals: req.body.newGoal.goal} }
    ).then(results => {
        // console.log(results)
        res.json(results);
    }).catch(err => {
        res.json(err);
        console.log(err);
    });
});

//IS THIS ROUTE EVEN NECESSARY IF WE ALREADY HAVE A GET STUDENT BY ID ROUTE? We just have different information to parse now.
// router.route("/getStudentGoals")
// .post((req, res) => {
//     db.Student.findById({_id: req.body.id}).then(results => {
//             res.json(results);
//         }).catch(err => {
//             res.json(err);
//             console.log(err);
//         });
// });

router.route("/teacherAddStudent")
    .post((req, res) => {
        // console.log(req.body.userStudents);
        db.User.findByIdAndUpdate({ _id: req.user._id }, { students: req.body.userStudents }
        ).then(results => {
            // console.log(results)
            res.json(results);
        }).catch(err => {
            res.json(err);
            console.log(err);
        });
    });


router.route("/getUserStudents")
    .get((req, res) => {
        db.User.findOne({ _id: req.user._id })
            .then(response => {
                // console.log(response)
                res.json(response);
            })
            .catch(err => {
                res.json(err);
                console.log(err, "This err line 67 student.js");
            });
    });

router.route("/deleteStudent")
    .post((req, res) => {
        db.Student.deleteOne({ _id: req.body.id })
            .then(results => {
                // console.log(results);
                res.json(results);
            })
            .catch(err => {
                // console.log(err);
                res.json(err);
            });
    });


module.exports = router;