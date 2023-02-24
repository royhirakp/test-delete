// console.log('app')
require('dotenv/config');

const express = require('express')
const app = express()
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

// //routes
// const userRoute = require('./src/routs/User')

// //Connect Database
async function conntectDtabase(){
    try {
        let conntect = await mongoose.connect(process.env.mogourl);
        console.log('connccred database sucessfull!!!!!!!')
    } catch (error) {
        console.log(error)
    }
}
conntectDtabase()
app.get("/",(req,res)=>{
    res.json({
        status:"sucessful"
    })
})
// app.use(express.json())
// app.use('/', userRoute)

// //BAD REQUEST
// app.use('*',(req,res)=>{
//     res.status(404).json({
//         status:"worong url! 404 not found"

//     })
// })

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`)
})
// // const util = require('util');

// // const obj = {
// //   name: 'Alice',
// //   age: 30,
// //   friends: ['Bob', 'Charlie']
// // };

// // console.log(typeof(util.inspect(obj)));

// // function arr (e){
// //     throw e;

// // }

// // arr(5)
console.log(555)