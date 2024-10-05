import {useNavigate} from "react-router-dom";

// Application Specific Imports

//Styles
import '../stylesheet/NavBar.css';

/**
 * Navigation feature for the top bar that user can interact for user profile, login, logout.
 * @returns {JSX.Element}
 * @constructor
 */
function NavBar() {
    let navigate = useNavigate();

    function goHome() {
        navigate("/mainPanel");
    }

    function showPageA() {
        navigate("/pageA");
    }

    function showPageB() {
        navigate("/pageB");
    }

    return (
        <div id="navigation_bar">
            <button id="home-btn" className="page-select-btn" onClick={goHome}>HomeBtn</button>
            <h1 className="nav_title" onClick={(e) => {
                navigate("/home");
            }}>
                HMI Interface
            </h1>
            <button id="main-menu-btn-1" className="page-select-btn" onClick={showPageA}>MainMenuBtn1</button>
            <button id="main-menu-btn-2" className="page-select-btn" onClick={showPageB}>MainMenuBtn2</button>
        </div>
    );
}

export default NavBar;