import express from 'express';
const app = express();
const PORT = 5000;

import testRoutes from './Routes/test-route.js';
import userRoutes from './Routes/user.js';
import schoolRoutes from './Routes/school.js';


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/about', testRoutes);

app.use('/users', userRoutes);

app.use('/school', schoolRoutes);

app.use('/', (req,res,next)=>{
    res.send('<h1>Practicing Node Js</h1>');
})

app.listen(PORT);

