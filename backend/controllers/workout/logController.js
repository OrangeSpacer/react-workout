import asyncHandler from 'express-async-handler'
import ExerciseLog from '../../models/exerciseLogModel.js'
import WorkoutLog from '../../models/workoutLogModel.js'
import Workout from '../../models/workoutModel.js'


// @desc Create new workout log
// @route POST /api/workouts/log
// @access Private
export const createNewWorkoutLog = asyncHandler(async (req,res) => {
    const { workoutId } = req.body

    const user = req.user._id

    const workout = await WorkoutLog.findById(workoutId).populate('exercises')

    if(workout){
        const workoutLog = await WorkoutLog.create({
            user,
            workout: workoutId
        })

        const logs = workout.exercises.map(ex => {
            let timesArray = []
    
            for(let i = 0;i < ex.times;i++){
                timesArray.push({
                    weight: 0,
                    repeat: 0,
                })
            }

            return {
                user,
                exercise: ex._id,
                times: timesArray,
                workoutLog: workoutLog._id
            }
        })
    
        const createdExLogs = await ExerciseLog.insertMany(logs)
    
        const exLogIds = createdExLogs.map(log => log._id)
    
        const foundWorkoutLog = await WorkoutLog.findById(workoutLog._id)
    
        foundWorkoutLog.exerciseLog = exLogIds
    
        const updatedWorkoutLog = await foundWorkoutLog.save()
    
        res.json(updatedWorkoutLog)
    }
    else{
        res.status(404)
        throw new Error('Тренировка не найдена')
    }
})


