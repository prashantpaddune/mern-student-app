const express = require('express');
const router = express.Router();
const { createStudent, deleteStudent, getStudents, updateStudent } = require('../controllers/student');

router.get('/', getStudents);
router.post('/', createStudent);
router.patch('/:id', updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;