import Hamburger from "../Hamburger/Hamburger";
import Button from "../UI/Button/Button";
import { HeaderProps } from "./Header.props";

import './Header.scss'
const Header = ({children,...props}:HeaderProps):JSX.Element => {
    return (
        <header className="header">
            <Button>
                <img src="img/header/account.svg" alt="accountLink" />
            </Button>
            <Hamburger/>
        </header>
    );
}
 
export default Header;