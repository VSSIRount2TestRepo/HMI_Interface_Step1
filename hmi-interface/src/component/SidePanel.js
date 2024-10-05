// Application Specific Imports

import '../stylesheet/SidePanel.css';

function SidePanel(props) {

    let setCount = props.setCount;


    return (
        <div id="side-bar">
            <p>View more toggle</p>
            <button id="main-menu-btn-1" className="view-btn" onClick={() => setCount(2)}>View Less</button>
            <button id="main-menu-btn-2" className="view-btn" onClick={() =>  setCount(4)}>View More</button>
        </div>
    );
}

export default SidePanel;