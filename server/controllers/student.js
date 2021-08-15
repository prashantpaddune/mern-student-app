const mongoose = require("mongoose");
const Student = require('../models/student');

exports.getStudents = async (req, res) => {
    Student.find().exec((err, student) => {
        if(err){
            return res.status(400).json({
                error: 'Student not found in DB'
            });
        }
        res.json(student);
    })
}

exports.createStudent = async (req, res) => {
    const studentDetails = new Student(req.body)
    studentDetails.save((err, student) => {
        if (err){
            return res.status(400).json({
                error: 'Failed to save Student in DB'
            });
        }
        res.json(student)
    })
}

exports.updateStudent = async (req, res) => {
    const {id: _id} = req.params;
    const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    Student.findByIdAndUpdate(_id, {...post}, {new: true})
        .exec((err, student) => {
            if(err) {
                return res.status(400).json({
                    error: 'Failed to update Student'
                });
            }
            res.json(student);
    })
}

exports.deleteStudent = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    Student.findByIdAndRemove(id).exec((err, student) => {
        if(err) {
            return res.status(400).json({
                error: 'Failed to delete student'
            });
        }
        res.json({
            messege: 'Student Successfully Deleted'
        });
    })
}