import User from '../../models/userModel.js'
import asyncHandler from 'express-async-handler'
export const registerUser = asyncHandler(async (req,res) => {
    const {email,password} = req.body
    const isHaveUser = await User.findOne({email: email})
    if(isHaveUser){
        res.status(400)
        throw new Error('Данный пользовательй уже зарегестрирован')
    }

    const user = await User.create({
        email,password
    })
    // Cerate token
    res.json(user)
})