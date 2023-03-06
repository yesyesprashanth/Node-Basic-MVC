import express from 'express';
import {addNewStudentInfo, getStudentInfo, getStudentList, updateStudentInfo, deleteStudentInfo} from '../Controllers/school-controller.js'
const router = express.Router();

router.get('/', getStudentList);

router.get('/:id', getStudentInfo);

router.post('/', addNewStudentInfo);

router.patch('/:id', updateStudentInfo);

router.delete('/:id', deleteStudentInfo);

export default router;