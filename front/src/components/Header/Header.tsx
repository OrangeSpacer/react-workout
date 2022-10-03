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
                <Button onClick={() => history(-1)}>
                    Test
                </Button>:
                <Button onClick={() => history(isAuth ?  '/profile': '/auth')}>
                    <img src="img/header/account.svg" alt="accountLink" />
                </Button>
            }
            <Hamburger/>
        </header>
    );
}
 
export default Header;