
import '../stylesheet/imageViewer.css';

function ImageViewer(props) {

    let imageCount = props.boxCount;
    let img = props.previewImg;
    const imgComponents =[]

    for (let i  = 0; i < imageCount; i++) {
        imgComponents.push(<img className={"preview-img"} src={img} alt={"preview img"}/>)
    }


    return (
        <div>
            <p>Preview components</p>
            <div className={"image-display-panel"}>
                {imgComponents}
            </div>
        </div>
    );
}

export default ImageViewer;