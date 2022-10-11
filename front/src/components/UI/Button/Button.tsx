import { ButtonProps } from "./Button.props";
import './Button.scss';
import cn from 'classnames';
const Button = ({children,imgPath,textButton,className,...props}:ButtonProps): JSX.Element => {
    return (
        <button
        className={cn('btn',className)}
        {...props}
        >
            {children}
        </button>
    );
}
 
export default Button;