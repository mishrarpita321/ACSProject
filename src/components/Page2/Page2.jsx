import { Col } from "react-bootstrap";
import Header from "../Header/Header";
import IFrameVideoCombined from "../IFrame/IFrameVideoCombined";
import UploadBtn from "../UploadButton/UploadBtn";
import style from "./Page2.module.css";
import ComboFaceContainer from "../Combo/ComboFaceContainer/ComboFaceContainer";
import { useEffect, useRef, useState } from "react";
// import { Tooltip } from "../Combo/TimeLine/Tooltip";
import TimeLine from "../Combo/TimeLine/TimeLine";
import VideoPlayer from "../Combo/VideoPlayer/VideoPlayer";



const transformDataToFaceData = (data) => {
    console.log('data from transformDataToFaceData:', data)
    return data.data.flatMap((sentimentData) =>
        sentimentData.faces.map((face) => ({
            time: face.time,
            image: face.image
        }))
    );
};

const Page2 = () => {
    const [combinedData, setCombinedData] = useState(null);
    const [faceData, setFaceData] = useState(null);
    const [showPeopleVideo, setShowPeopleVideo] = useState(false);
    const [showLoaderVideo, setShowLoaderVideo] = useState(false);
    const [videoSrc, setVideoSrc] = useState(null);


    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);



    const videoRef = useRef(null);
    const [videoLength, setVideoLength] = useState(null); // initially no video length
    const [currentVideoTime, setCurrentVideoTime] = useState('00:00:00');

    const handleMetadata = (e) => {
        setVideoLength(e.target.duration);
    };


    const handleTimestampClick = (time) => {
        console.log('clicked on time',time);

        videoRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

        
        // const parts = time.split(':');
        // const seconds = parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2]);
        const seconds = parseFloat(time.replace('sec', ''));
        console.log('clicked on time',seconds);

        if (videoRef.current) {
            videoRef.current.currentTime = seconds;
            videoRef.current.play();
        }
    };




    useEffect(() => {

        if (combinedData) {
            console.log('RRRRcombined data is:', combinedData);
            let f = transformDataToFaceData(combinedData);
            console.log('face data is:', f);
            setFaceData(f)
            // setShowPeopleVideo(true);
        }

    }, [combinedData]);


    console.log('combined data is:', combinedData);
    // const faceData = transformDataToFaceData(data);
    // console.log('face data is:', faceData);


    return (
        <>
            <Header title="Combined Use Case of Vision API and Video Intelligence API" />
            <div className={`container`}>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div>
                            <VideoPlayer
                                src={videoSrc}
                                onLoadedMetadata={handleMetadata}
                                onTimeUpdate={(e) => setCurrentVideoTime(e.target.currentTime)}
                                videoRef={videoRef}
                            />

                        </div>
                    </div>
                    <div className={`col-12 col-md-6 d-flex flex-column justify-content-between`} >
                        {/* <div className={{col}}> */}
                        <div>
                            <p>
                                The video is analyzed and the frames are being extracted from it.
                                It is then fed to the the vision API and sentiments of the persons are shown.
                            </p>
                        </div>
                        <div>
                            <UploadBtn fileType={'combined'} setCombinedData={setCombinedData} setFileSrc={setVideoSrc} setShowFaces={setShowPeopleVideo} setShowLoader={setShowLoaderVideo} showLoader={showLoaderVideo} widthInPercentage="100%" />
                        </div>
                    </div>
                </div>
                {showPeopleVideo && (
                    <>
                        <div className="row" style={{ marginTop: "50px", marginBottom: "15px" }}>
                            {faceData && faceData.length > 0 && (

                                <TimeLine
                                    faceData={faceData}
                                    videoLength={videoLength}
                                    onTimestampClick={handleTimestampClick}
                                />
                            )}
                        </div>
                        <div className="row">
                            <ComboFaceContainer data={combinedData} onTimeFaceClick={handleTimestampClick} />
                        </div>
                    </>

                )}
            </div>

        </>
    );
};
export default Page2;







// Example usage with the actual response object
// const apiResponse = {
//     "cannot-detect": [
//         {
//             "id": 0,
//             "currentEmotion": "cannot-detect",
//             "timestamp": "13.80sec",
//             "img": "https://storage.googleapis.com/...",
//             "attributes": [
//                 {"name": "eyes_visible", "confidence": 0.994},
//                 // more attributes...
//             ]
//         },
//         // more faces...
//     ],
//     // other emotions...
// };

// const transformed = transformApiResponse(apiResponse);
// console.log(transformed);
