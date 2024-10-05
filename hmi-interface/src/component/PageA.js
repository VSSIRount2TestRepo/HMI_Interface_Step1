import SidePanel from "./SidePanel";
import {useState} from "react";

import ImageViewer from "./ImageViewer";

import imageA from '../data/img/imgA.jpg';
import '../stylesheet/pages.css';

function PageA() {

    const [boxCount, setCount] = useState(2);

    return (
        <div className="main-panel">
            <SidePanel
                setCount={setCount}
            />
            <ImageViewer
                boxCount={boxCount}
                previewImg={imageA}
            />
        </div>
    );
}

export default PageA;