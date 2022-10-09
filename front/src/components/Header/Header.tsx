import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Hamburger from "../Hamburger/Hamburger";
import Button from "../UI/Button/Button";
import { HeaderProps } from "./Header.props";

import './Header.scss'
const Header = ({children,...props}:HeaderProps):JSX.Element => {
    const history = useNavigate()
    const location = useLocation()
    const {isAuth} = useAuth()
    return (
        <header className="header">
            {location.pathname!=='/' ? 
                <Button onClick={() => history('/')}>
                    <img src={location.pathname.includes(':') ? "../img/header/arrow.svg":"../img/header/arrow.svg"} alt="back" />
                </Button>:
                <Button onClick={() => history(isAuth ?  '/profile': '/auth')}>
                    <img src={isAuth ? "./img/header/auth.svg":"./img/header/account.svg"} alt="accountLink" />
                </Button>
            }
            <Hamburger/>
        </header>
    );
}
 
export default Header;