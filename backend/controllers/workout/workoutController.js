import asyncHandler from 'express-async-handler'
import Workout from '../../models/workoutModel.js'

// @desc Create new workout
// @route POST /api/workouts
// @access Private

export const createNewWorkout = asyncHandler(async (req,res) => {
    const {name,exerciseIds} = req.body
    const workout = await Workout.create({
        name,
        exercises: exerciseIds
    })
    res.json(workout)
})


// @desc Get workout
// @route POST /api/workouts/:id
// @access Private

export const getWorkout = asyncHandler(async (req,res) => {
    const workout = await Workout.findById(req.params.id).populate('exercises').lean()

    const minutes = Math.ceil(workout.exercises.length * 3.7)
    
    res.json({...workout, minutes})
})


// @desc Update workout
// @route PUT /api/workouts
// @acces Private

export const updateWorkoutLog = asyncHandler(async (req,res) => {
    const {name, exerciseIds, workoutId} = req.body

    const workoutLog = await Workout.findById(workoutId)

    if(!workoutLog){
        res.status(404)
        throw new Error('Данная тренировака не найдена')
    }

    workoutLog.name = name
    workoutLog.exercises = exerciseIds

    const updateWorkout = await workoutLog.save()

    res.json(updateWorkout)
})


// @desc Deleter workout
// @route DELETE /api/workouts
// @acces Private

export const deleteWorkout = asyncHandler(async (req,res) => {
    const {workoutId} = req.body

    const workout = await Workout.findById(workoutId)

    if(!workout){
        res.status(404)
        throw new Error('Данная тренировака не найдена')
    }

    await workout.remove()

    res.json({message: 'Workout has been removed'})
})