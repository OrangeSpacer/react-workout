import asyncHandler from 'express-async-handler'
import Exercise from '../../models/exerciseModel.js'

// @desc Create new exercise
// @route POST /api/exercise
// @access Private

export const createNewExercise = asyncHandler(async (req,res) => {
    const {name,times,imageId} = req.body
    const exercise = await Exercise.create({
        name,times,imageId
    })
    res.json(exercise)
})