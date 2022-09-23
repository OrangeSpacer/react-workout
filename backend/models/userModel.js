import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    name: String,
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    // statisctics:{
    //     minute: {type:Number,default: 0},
    //     workouts: {type: Number, default: 0},
    //     kgs: {type: Number, default: 0}
    // }
    image:{
        before: String,
        after: String
    }
},{
    minimize: false,
    timestamps: true
})

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcryptjs.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next){
    if(!this.isModified('password')){
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User',userSchema)

export default User