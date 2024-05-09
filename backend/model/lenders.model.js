const { mongoose } = require("mongoose")

const scehma = new mongoose.Schema({
    useraddress: {
        type: String,
        unique: true,
    },
    choice: {
        type: Boolean,
        default: false
    },
    interestrate:{
        type:Number,
        // required:[true,"please add interes rate"]
    },
    duration:{
        
    },
    createdAt: {
        type: String, // Use Number type for timestamps
        default: () => new Date().toLocaleString()// Default value is set to the current timestamp
    },
    updatedAt: {
        type: String, // Use Number type for timestamps
        default: () => new Date().toLocaleString() // Default value is set to the current timestamp
    }

}
    // , {timestamps:true}
)

const lendersmodel = new mongoose.model("lenders", scehma)

module.exports = lendersmodel

