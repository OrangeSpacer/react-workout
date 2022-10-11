import { ExerciseProps } from './Exercise.props'
import cn from 'classnames'
import './Exercise.scss'

const Exercise = ({imgPath,nameEx,times,completed}:ExerciseProps) => {
  return (
    <div className={cn('exercise',{
        ['exercise__completed']: completed === true
    })}>
        <div className='exercise__name'>
            {nameEx}
        </div>
        <div className='exercise__times'>
            times: {times}
        </div>
        <div className='exercise__typeImg'>
            <img src={imgPath} alt="exType" />
        </div>
    </div>
  )
}

export default Exercise