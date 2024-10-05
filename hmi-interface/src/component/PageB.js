import SidePanel from "./SidePanel";
import {useState} from "react";
import ImageViewer from "./ImageViewer";

import imageB from '../data/img/imgB.jpg';

import '../stylesheet/pages.css';

function PageB() {

    const [boxCount, setCount] = useState(2);

    return (
        <div className="main-panel">
            <SidePanel
                setCount={setCount}
            />
            <ImageViewer
                boxCount={boxCount}
                previewImg={imageB}
            />
        </div>
    );
}

export default PageB;