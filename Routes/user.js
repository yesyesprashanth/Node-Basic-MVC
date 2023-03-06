import express from 'express';
const router = express.Router();

import { v4 as uuidv4 } from 'uuid';


const users = [];

router.get('/', (req,res,next)=>{
    console.log(users);
    res.json(users);
});

router.get('/:id', (req,res)=>{
    const {id} = req.params

    const foundUser = users.find(user=>user.id === id);

    console.log(foundUser);

    res.send(foundUser);
})

router.post('/', (req,res, next)=>{
    const user = req.body;
    const userId = uuidv4();
    const userWithId = {
        ...user, "id": uuidv4(),
    }

    users.push(userWithId);
    res.send("POST received");
})

router.delete('/:id', (req,res,next)=>{    
    const {id} = req.params;

    const index = users.findIndex(user=>user.id === id);    
    if(index>-1)
        users.splice(index, 1);
    
    res.send("delete data received");
});

router.patch('/:id', (req,res,next)=>{
    const {id} = req.params;
    const updatedData = req.body;
    const userToBeUpdated = users.find(user=>user.id === id);

    if(updatedData.firstName){
        userToBeUpdated.firstName = updatedData.firstName
    }
    if(updatedData.lastName){
        userToBeUpdated.lastName = updatedData.lastName
    }
    if(updatedData.firstName){
        userToBeUpdated.age = updatedData.age
    }

    res.status(200).send("updated successfully");
})

export default router;