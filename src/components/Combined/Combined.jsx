import EmojiPicker from "../Emotion/EmojiPicker";
import IFrame from "../IFrame/IFrame"
import IFrameVideo from "../IFrame/IFrameVideo";
import People from "../People/People";
import styles from './Combined.module.css'
import Header from "../Header/Header";
import TableLoader from "../table_placeholder_loader/TableLoader";
import ComparisonTable from "../Comparison/ComparisonTable";
import VideoPlayer from "../Combo/VideoPlayer/VideoPlayer";
import { useRef, useState } from "react";
import UploadBtn from "../UploadButton/UploadBtn";
import Loader from "../Loader/Loader";

const Combined = () => {
    const videoRef = useRef(null);
    const [videoSrc, setVideoSrc] = useState(null);
    const [imageSrc, setImageSrc] = useState(null);
    const [showEmojiVideo, setShowEmojiVideo] = useState(false);
    const [showEmojiImage, setShowEmojiImage] = useState(false);
    const [visionData, setVisionData] = useState([]);
    const [filteredVisionData, setVisiontFilteredData] = useState(null);
    const [visionEmojiClicked, setVisionEmojiClicked] = useState(false);
    const [videoEmojiClicked, setVideoEmojiClicked] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    
    return (
        <>
            <Header title="Vision API vs. Video Intelligence API" />
            <div className="container">
                <div style={{ position: "relative" }} className="row">
                    <div className={`col-12 col-md-6 ${styles.iFrameContainer}`}>
                        <h1 style={{ color: '#8e62a0', fontFamily: 'sans-serif' }}>Upload Video</h1>
                        {/* <IFrameVideo /> */}
                        <VideoPlayer
                            src={videoSrc}
                            onLoadedMetadata={() => { }}
                            onTimeUpdate={(e) => setCurrentVideoTime(e.target.currentTime)}
                            videoRef={videoRef}
                        />
                        <UploadBtn setFileSrc={setVideoSrc} fileType="video"/>
                        {showEmojiVideo && <EmojiPicker />}
                        {videoEmojiClicked && <People />}
                   </div>
                    <div className={`d-none d-lg-block ${styles.verticalLine}`}></div>
                    <div className={` col-12 d-md-none ${styles.horizontalLine}`}></div>
                    <div className={`col-12 col-md-6 ${styles.iFrameContainer}`}>
                        <h1 style={{ color: '#8e62a0', fontFamily: 'sans-serif' }}>Upload Image</h1>
                        <IFrame imageSrc={imageSrc}/>
                        <UploadBtn setFileSrc={setImageSrc} fileType="image" setShowEmoji={setShowEmojiImage} setVisionData={setVisionData} setShowLoader={setShowLoader} />
                        {showLoader && <Loader />}
                        {showEmojiImage && <EmojiPicker visionData={visionData} setFilteredData={setVisiontFilteredData} setShowFaces={setVisionEmojiClicked} />}
                        {visionEmojiClicked && <People filteredVisionData={filteredVisionData} />}
                    </div>
                </div>


                {/* implementation is remaning */}
                {/* 
                <div style={{marginTop:`50px`}} className="row">
                    <TableLoader />
                    <ComparisonTable />
                </div>
                */}
            </div>
        </>
    );
};
export default Combined;