import SidePanel from "./SidePanel";
import {useState} from "react";

import ImageViewer from "./ImageViewer";

import '../stylesheet/pages.css';
import mainImg from "../data/img/mainImg.jpg";

function PageMain() {

    const [boxCount, setCount] = useState(2);

    return (
        <div className="main-panel">
            <SidePanel
                setCount={setCount}
            />
            <ImageViewer
                boxCount={boxCount}
                previewImg={mainImg}
            />
        </div>
    );
}

export default PageMain;