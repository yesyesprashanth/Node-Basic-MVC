import {v4 as uuid} from 'uuid'
const studentList = []

export const getStudentList = (req,res,next) =>{
    res.json(studentList);
}

export const getStudentInfo = (req,res,next) =>{
    const {id} = req.params;

    const student = studentList.find(student=>student.id = id);
    res.json(student);
}

export const addNewStudentInfo = (req,res,next) =>{
    const newStudent = req.body;

    studentList.push({...newStudent, id:uuid()});
    res.json("New Student Info");
}

export const updateStudentInfo = (req,res,next) =>{
    const {Id} = req.params;
    const studentInfo = req.body;

    const student = studentList.find(student => student.id === Id);

    if(studentInfo.firstName) student.firstName = studentInfo.firstName;
    if(studentInfo.lastName) student.lastName = studentInfo.lastName;
    if(studentInfo.age) student.age = studentInfo.age;
    if(studentInfo.course) student.course = studentInfo.course;
    res.json("updated Student Info");
}

export const deleteStudentInfo = (req,res,next) =>{
    const {id} = req.params;
    const studentIndex = studentList.findIndex(student=>student.id===id);
    studentList.splice(studentIndex, 1);
    res.json("deleted Student Info");
}