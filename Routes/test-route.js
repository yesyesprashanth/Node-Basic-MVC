import express from 'express';
const route = express.Router();
import testController from '../Controllers/test-controller.js';

route.get('/', testController.getJsonData);

route.get('/1', (req, res, next)=>{
    res.json({name:"Prashanth", age:37});
})

export default route;

