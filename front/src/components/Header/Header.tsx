import Button from "../UI/Button/Button";
import { HeaderProps } from "./Header.props";

import './Header.scss'
const Header = ({children,...props}:HeaderProps):JSX.Element => {
    return (
        <header className="header">
            <Button>
                <img src="img/header/account.svg" alt="accountLink" />
            </Button>
            <Button>
                <img src="img/header/hamburger.svg" alt="hamburger" />
            </Button>
        </header>
    );
}
 
export default Header;