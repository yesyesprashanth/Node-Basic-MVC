import JsonData from "../Models/test-model.js";

const getJson = (req, res, next)=>{
    res.json(JsonData);
}

const testContoller = {
    getJsonData:getJson,
}

export default testContoller;

