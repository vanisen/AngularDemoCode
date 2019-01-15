const express  = require('express');
const router = express.Router();
const sum = require('../classes/database.js')

router.get('/', (req,res) =>{
    res.send("hiiii")
    let myobj = { name: "Company Inc", address: "Highway 38" };
    sum( myobj)
})

router.post('/addData',(req,res)=>{
    sum.prototype.addData2('booking',req.body)
})

router.get('/update', (req,res) =>{
    let query = { name: "google Inc"}
	let myobj2 =  { $set: {name: "facebook", address: "Canyon 123" } };
	sum.prototype.update(query, myobj2)
})

router.get('/getAllProperty',(req,res) => {
    let out = sum.prototype.getData("property")
    let out1 = JSON.stringify(out)
    res.send(out1)
})

router.get('/delete', (req,res) => {
    let myobj2 = { name: "google Inc"};
    sum.prototype.delete('property', myobj2);
})


module.exports = router;