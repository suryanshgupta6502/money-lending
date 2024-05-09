const web = require('web3')
const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv=require("dotenv")
dotenv.config()
const lendersmodel = require('./model/lenders.model')

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB).then(() => {
    console.log("coonected");
}).catch((err) => {
    console.log(err);
})

lendersmodel()

app.get('/', (req, res) => {
    res.send("ghello")
})


app.get("/lenders", async (req, res) => {
    try {
        const users = await lendersmodel.find().sort({ createdAT: -1 })
        res.status(200).send({
            message: "all lenders",
            users
        })

        // console.log(users);
    } catch (error) {
        console.log(error);
    }

})

app.post("/update", async (req, res) => {
    console.log(req.body);
    console.log("updating profile");

    const { walletaddress, intrest, choice } = req.body


    try {
        const log = await lendersmodel.findOne({ useraddress: walletaddress })
        console.log(log);
        let user;

        if (log == null) {
            user = await lendersmodel({ useraddress: walletaddress, choice: choice, interestrate: intrest })
                .save()
            console.log("adding", user);
        }
        else {
            user = await lendersmodel.findOneAndUpdate({ useraddress: walletaddress }, { useraddress: walletaddress, choice: choice, interestrate: intrest, updatedAt: new Date().toLocaleString() })
            console.log("updating");

        }

        res.status(200).send({
            message: "profile is add to db",
            user
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "error in udate" })
    }


})


app.post("/profile", async (req, res) => {

    const { address, choice } = req.body
    console.log(address, choice);

    try {
        const log = await lendersmodel.findOne({ useraddress: address })
        // console.log(log);
        let user;

        if (log == null) {
            user = await lendersmodel({ useraddress: address, choice: choice })
                .save()
            console.log("adding", user);
        }
        else {
            user = await lendersmodel.findOneAndUpdate({ useraddress: address }, { useraddress: address, choice: choice, updatedAt: new Date().toLocaleString() })
            console.log("updating");

        }

        res.status(200).send({
            message: "profile is add to db",
            user
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "error in profile" })
    }



})


app.get("/get-profile",async(req,res)=>{

    const {address}=req.query
    console.log(req);
    try {
        const user = await lendersmodel.find({ useraddress: address })
        console.log(user);

        res.status(200).send({
            message: "get user profile",
            user
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "error in profile" })
    }

})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`port listen at ${port}`);
})

