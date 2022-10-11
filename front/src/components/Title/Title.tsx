import { TitleProps } from './Title.props'
import cn from 'classnames'

import './Title.scss'

const Title = ({tag,side,children}: TitleProps):JSX.Element => {
    switch(tag){
        case 'h1':
            return <h1 className={cn('title',side)}>{children}</h1>
        case 'h2':
            return <h2 className={cn('title',side)}>{children}</h2>
        case 'h3':
            return <h3 className={cn('title',side)}>{children}</h3>
    }
}

export default Title