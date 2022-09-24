import express from "express";
import { createNewExerciseLog, getExerciseLog } from "../controllers/exercise/LogControlller.js";
import { createNewExercise } from "../controllers/exercise/mainController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router()

router.route('/').post(protect,createNewExercise)
router.route('/log').post(protect,createNewExerciseLog)
router.route('/log/:id').get(protect,getExerciseLog)

export default router