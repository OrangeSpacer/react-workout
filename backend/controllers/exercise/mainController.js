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



// @desc Get exercises
// @route POST /api/exercises
// @access Private

export const getExercises = asyncHandler(async (req,res) => {
    const exercise = await Exercise.find({})
    
    res.json(exercise)
})


// @desc Update exercise
// @route PUT /api/exercise
// @acces Private

export const updateExercise = asyncHandler(async (req,res) => {
    const {name, times, imageId, exerciseId} = req.body

    const exercise = await Exercise.findById(exerciseId)

    if(!exercise){
        res.status(404)
        throw new Error('Данное упражнение не найдена')
    }

    exercise.name = name
    exercise.times = times
    exercise.imageId =  imageId

    const updateWorkout = await exercise.save()

    res.json(updateWorkout)
})


// @desc Deleter exercise
// @route DELETE /api/exercise
// @acces Private

export const deleteExercise = asyncHandler(async (req,res) => {
    const {exerciseId} = req.body

    const exercise = await Exercise.findById(exerciseId)

    if(!exercise){
        res.status(404)
        throw new Error('Данное урпажнение не найдена')
    }

    await exercise.remove()

    res.json({message: 'Exercise has been removed'})
})