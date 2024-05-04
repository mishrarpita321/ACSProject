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

const data = {
    "data": [
        {
            "sentiment": "happy",
            "faces": [
                {
                    "id": 1,
                    "image": "https://img.icons8.com/color/150/000000/happy.png",
                    "time": "00:00:10",
                    "features": [
                        {
                            "feature": "glasses",
                            "percentage": "3",
                        },
                        {
                            "feature": "smiling",
                            "percentage": "10",
                        },
                        {
                            "feature": "looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature": "eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature": "mouth open",
                            "percentage": "50",
                        }
                    ]
                },
                {
                    "id": 2,
                    "image": "https://img.icons8.com/color/150/000000/happy.png",
                    "time": "00:00:30",
                    "features": [
                        {
                            "feature": "glasses",
                            "percentage": "3",
                        },
                        {
                            "feature": "smiling",
                            "percentage": "10",
                        },
                        {
                            "feature": "looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature": "eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature": "mouth open",
                            "percentage": "50",
                        }
                    ]
                },
                {
                    "id": 3,
                    "image": "https://img.icons8.com/color/150/000000/happy.png",
                    "time": "00:00:20",
                    "features": [
                        {
                            "feature": "glasses",
                            "percentage": "3",
                        },
                        {
                            "feature": "smiling",
                            "percentage": "10",
                        },
                        {
                            "feature": "looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature": "eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature": "mouth open",
                            "percentage": "50",
                        }
                    ]
                },
                {
                    "id": 4,
                    "image": "https://img.icons8.com/color/150/000000/happy.png",
                    "time": "00:00:33",
                    "features": [
                        {
                            "feature": "glasses",
                            "percentage": "3",
                        },
                        {
                            "feature": "smiling",
                            "percentage": "10",
                        },
                        {
                            "feature": "looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature": "eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature": "mouth open",
                            "percentage": "50",
                        }
                    ]
                },
                {
                    "id": 50,
                    "image": "https://img.icons8.com/color/150/000000/happy.png",
                    "time": "00:00:00",
                    "features": [
                        {
                            "feature": "glasses",
                            "percentage": "3",
                        },
                        {
                            "feature": "smiling",
                            "percentage": "10",
                        },
                        {
                            "feature": "looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature": "eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature": "mouth open",
                            "percentage": "50",
                        }
                    ]
                }
            ]
        },
        {
            "sentiment": "sad",
            "faces": [
                {
                    "id": 5,
                    "image": "https://img.icons8.com/color/150/000000/sad.png",
                    "time": "00:00:00",
                    "features": [
                        {
                            "feature": "glasses",
                            "percentage": "3",
                        },
                        {
                            "feature": "smiling",
                            "percentage": "10",
                        },
                        {
                            "feature": "looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature": "eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature": "mouth open",
                            "percentage": "50",
                        }
                    ]
                },
                {
                    "id": 6,
                    "image": "https://img.icons8.com/color/150/000000/sad.png",
                    "time": "00:00:00",
                    "features": [
                        {
                            "feature": "glasses",
                            "percentage": "3",
                        },
                        {
                            "feature": "smiling",
                            "percentage": "10",
                        },
                        {
                            "feature": "looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature": "eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature": "mouth open",
                            "percentage": "50",
                        }
                    ]
                },
                {
                    "id": 7,
                    "image": "https://img.icons8.com/color/150/000000/sad.png",
                    "time": "00:00:00",
                    "features": [
                        {
                            "feature": "glasses",
                            "percentage": "3",
                        },
                        {
                            "feature": "smiling",
                            "percentage": "10",
                        },
                        {
                            "feature": "looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature": "eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature": "mouth open",
                            "percentage": "50",
                        }
                    ]
                },
                {
                    "id": 8,
                    "image": "https://img.icons8.com/color/150/000000/sad.png",
                    "time": "00:00:00",
                    "features": [
                        {
                            "feature": "glasses",
                            "percentage": "3",
                        },
                        {
                            "feature": "smiling",
                            "percentage": "10",
                        },
                        {
                            "feature": "looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature": "eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature": "mouth open",
                            "percentage": "50",
                        }
                    ]
                }
            ]
        },
        {
            "sentiment": "angry",
            "faces": [
                {
                    "id": 9,
                    "image": "https://img.icons8.com/color/150/000000/angry.png",
                    "time": "00:00:00",
                    "features": [
                        {
                            "feature": "glasses",
                            "percentage": "3",
                        },
                        {
                            "feature": "smiling",
                            "percentage": "10",
                        },
                        {
                            "feature": "looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature": "eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature": "mouth open",
                            "percentage": "50",
                        }
                    ]
                },
                {
                    "id": 10,
                    "image": "https://img.icons8.com/color/150/000000/angry.png",
                    "time": "00:00:00",
                    "features": [
                        {
                            "feature": "glasses",
                            "percentage": "3",
                        },
                        {
                            "feature": "smiling",
                            "percentage": "10",
                        },
                        {
                            "feature": "looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature": "eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature": "mouth open",
                            "percentage": "50",
                        }
                    ]
                },
                {
                    "id": 11,
                    "image": "https://img.icons8.com/color/150/000000/angry.png",
                    "time": "00:00:00",
                    "features": [
                        {
                            "feature": "glasses",
                            "percentage": "3",
                        },
                        {
                            "feature": "smiling",
                            "percentage": "10",
                        },
                        {
                            "feature": "looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature": "eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature": "mouth open",
                            "percentage": "50",
                        }
                    ]
                },
                {
                    "id": 12,
                    "image": "https://img.icons8.com/color/150/000000/angry.png",
                    "time": "00:00:00",
                    "features": [
                        {
                            "feature": "glasses",
                            "percentage": "3",
                        },
                        {
                            "feature": "smiling",
                            "percentage": "10",
                        },
                        {
                            "feature": "looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature": "eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature": "mouth open",
                            "percentage": "50",
                        }
                    ]
                }
            ]
        },
        {
            "sentiment": "joyful",
            "faces": [
                {
                    "id": 13,
                    "image": "https://img.icons8.com/color/150/000000/surprised.png",
                    "time": "00:00:00",
                    "features": [
                        {
                            "feature": "glasses",
                            "percentage": "3",
                        },
                        {
                            "feature": "smiling",
                            "percentage": "10",
                        },
                        {
                            "feature": "looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature": "eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature": "mouth open",
                            "percentage": "50",
                        }
                    ]
                },
                {
                    "id": 14,
                    "image": "https://img.icons8.com/color/150/000000/surprised.png",
                    "time": "00:00:00",
                    "features": [
                        {
                            "feature": "glasses",
                            "percentage": "3",
                        },
                        {
                            "feature": "smiling",
                            "percentage": "10",
                        },
                        {
                            "feature": "looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature": "eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature": "mouth open",
                            "percentage": "50",
                        }
                    ]
                },
                {
                    "id": 15,
                    "image": "https://img.icons8.com/color/150/000000/surprised.png",
                    "time": "00:00:00",
                    "features": [
                        {
                            "feature": "glasses",
                            "percentage": "3",
                        },
                        {
                            "feature": "smiling",
                            "percentage": "10",
                        },
                        {
                            "feature": "looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature": "eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature": "mouth open",
                            "percentage": "50",
                        }
                    ]
                },
                {
                    "id": 16,
                    "image": "https://img.icons8.com/color/150/000000/surprised.png",
                    "time": "00:00:00",
                    "features": [
                        {
                            "feature": "glasses",
                            "percentage": "3",
                        },
                        {
                            "feature": "smiling",
                            "percentage": "10",
                        },
                        {
                            "feature": "looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature": "eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature": "mouth open",
                            "percentage": "50",
                        }
                    ]
                }
            ]
        }
    ]
}

const transformDataToFaceData = (data) => {
    return data.data.flatMap((sentimentData) => 
      sentimentData.faces.map((face) => ({
        time: face.time,
        image: face.image
      }))
    );
  };

const Page2 = () => {

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
        console.log(time);
        const parts = time.split(':');
        const seconds = parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2]);
        
        if (videoRef.current) {
            videoRef.current.currentTime = seconds;
            videoRef.current.play();
        }
    };


    const faceData =  transformDataToFaceData(data);


    return (
        <>
            <Header title="title of page 2" />
            <div className={`container`}>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div>
                            <VideoPlayer
                                src="./face_dec.mp4"
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
                            <UploadBtn widthInPercentage="100%" />
                        </div>
                    </div>
                </div>
                <div className="row" style={{marginTop:"50px",marginBottom:"15px"}}>
                    <TimeLine
                        faceData={faceData}
                        videoLength={videoLength}
                        onTimestampClick={handleTimestampClick}
                    />
                </div>
                <div className="row">
                    <ComboFaceContainer data={data} onTimeFaceClick={handleTimestampClick} />
                </div>
            </div>

        </>
    );
};
export default Page2;