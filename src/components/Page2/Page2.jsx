import { Col } from "react-bootstrap";
import Header from "../Header/Header";
import IFrameVideoCombined from "../IFrame/IFrameVideoCombined";
import UploadBtn from "../UploadButton/UploadBtn";
import style from "./Page2.module.css";
import ComboFaceContainer from "../Combo/ComboFaceContainer/ComboFaceContainer";

const data = {
    "data": [
        {
            "sentiment": "happy",
            "faces": [
                {
                    "id": 1,
                    "image": "https://img.icons8.com/color/150/000000/google-logo.png",
                    "time": "00:00:00",
                    "features":[
                        {
                            "feature":"glasses",
                            "percentage": "3",
                        },
                        {
                            "feature":"smiling",
                            "percentage": "10",
                        },
                        {
                            "feature":"looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature":"eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature":"mouth open",
                            "percentage": "50",
                        }
                    ]
                },
                {
                    "id": 2,
                    "image": "https://img.icons8.com/color/150/000000/google-logo.png",
                    "time": "00:00:00",
                    "features":[
                        {
                            "feature":"glasses",
                            "percentage": "3",
                        },
                        {
                            "feature":"smiling",
                            "percentage": "10",
                        },
                        {
                            "feature":"looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature":"eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature":"mouth open",
                            "percentage": "50",
                        }
                    ]
                },
                {
                    "id": 3,
                    "image": "https://img.icons8.com/color/150/000000/google-logo.png",
                    "time": "00:00:00",
                    "features":[
                        {
                            "feature":"glasses",
                            "percentage": "3",
                        },
                        {
                            "feature":"smiling",
                            "percentage": "10",
                        },
                        {
                            "feature":"looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature":"eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature":"mouth open",
                            "percentage": "50",
                        }
                    ]
                },
                {
                    "id": 4,
                    "image": "https://img.icons8.com/color/150/000000/google-logo.png",
                    "time": "00:00:00",
                    "features":[
                        {
                            "feature":"glasses",
                            "percentage": "3",
                        },
                        {
                            "feature":"smiling",
                            "percentage": "10",
                        },
                        {
                            "feature":"looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature":"eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature":"mouth open",
                            "percentage": "50",
                        }
                    ]
                },
                {
                    "id": 50,
                    "image": "https://img.icons8.com/color/150/000000/google-logo.png",
                    "time": "00:00:00",
                    "features":[
                        {
                            "feature":"glasses",
                            "percentage": "3",
                        },
                        {
                            "feature":"smiling",
                            "percentage": "10",
                        },
                        {
                            "feature":"looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature":"eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature":"mouth open",
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
                    "image": "https://img.icons8.com/color/150/000000/google-logo.png",
                    "time": "00:00:00",
                    "features":[
                        {
                            "feature":"glasses",
                            "percentage": "3",
                        },
                        {
                            "feature":"smiling",
                            "percentage": "10",
                        },
                        {
                            "feature":"looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature":"eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature":"mouth open",
                            "percentage": "50",
                        }
                    ]
                },
                {
                    "id": 6,
                    "image": "https://img.icons8.com/color/150/000000/google-logo.png",
                    "time": "00:00:00",
                    "features":[
                        {
                            "feature":"glasses",
                            "percentage": "3",
                        },
                        {
                            "feature":"smiling",
                            "percentage": "10",
                        },
                        {
                            "feature":"looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature":"eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature":"mouth open",
                            "percentage": "50",
                        }
                    ]
                },
                {
                    "id": 7,
                    "image": "https://img.icons8.com/color/150/000000/google-logo.png",
                    "time": "00:00:00",
                    "features":[
                        {
                            "feature":"glasses",
                            "percentage": "3",
                        },
                        {
                            "feature":"smiling",
                            "percentage": "10",
                        },
                        {
                            "feature":"looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature":"eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature":"mouth open",
                            "percentage": "50",
                        }
                    ]
                },
                {
                    "id": 8,
                    "image": "https://img.icons8.com/color/150/000000/google-logo.png",
                    "time": "00:00:00",
                    "features":[
                        {
                            "feature":"glasses",
                            "percentage": "3",
                        },
                        {
                            "feature":"smiling",
                            "percentage": "10",
                        },
                        {
                            "feature":"looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature":"eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature":"mouth open",
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
                    "image": "https://img.icons8.com/color/150/000000/google-logo.png",
                    "time": "00:00:00",
                    "features":[
                        {
                            "feature":"glasses",
                            "percentage": "3",
                        },
                        {
                            "feature":"smiling",
                            "percentage": "10",
                        },
                        {
                            "feature":"looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature":"eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature":"mouth open",
                            "percentage": "50",
                        }
                    ]
                },
                {
                    "id": 10,
                    "image": "https://img.icons8.com/color/150/000000/google-logo.png",
                    "time": "00:00:00",
                    "features":[
                        {
                            "feature":"glasses",
                            "percentage": "3",
                        },
                        {
                            "feature":"smiling",
                            "percentage": "10",
                        },
                        {
                            "feature":"looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature":"eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature":"mouth open",
                            "percentage": "50",
                        }
                    ]
                },
                {
                    "id": 11,
                    "image": "https://img.icons8.com/color/150/000000/google-logo.png",
                    "time": "00:00:00",
                    "features":[
                        {
                            "feature":"glasses",
                            "percentage": "3",
                        },
                        {
                            "feature":"smiling",
                            "percentage": "10",
                        },
                        {
                            "feature":"looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature":"eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature":"mouth open",
                            "percentage": "50",
                        }
                    ]
                },
                {
                    "id": 12,
                    "image": "https://img.icons8.com/color/150/000000/google-logo.png",
                    "time": "00:00:00",
                    "features":[
                        {
                            "feature":"glasses",
                            "percentage": "3",
                        },
                        {
                            "feature":"smiling",
                            "percentage": "10",
                        },
                        {
                            "feature":"looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature":"eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature":"mouth open",
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
                    "image": "https://img.icons8.com/color/150/000000/google-logo.png",
                    "time": "00:00:00",
                    "features":[
                        {
                            "feature":"glasses",
                            "percentage": "3",
                        },
                        {
                            "feature":"smiling",
                            "percentage": "10",
                        },
                        {
                            "feature":"looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature":"eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature":"mouth open",
                            "percentage": "50",
                        }
                    ]
                },
                {
                    "id": 14,
                    "image": "https://img.icons8.com/color/150/000000/google-logo.png",
                    "time": "00:00:00",
                    "features":[
                        {
                            "feature":"glasses",
                            "percentage": "3",
                        },
                        {
                            "feature":"smiling",
                            "percentage": "10",
                        },
                        {
                            "feature":"looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature":"eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature":"mouth open",
                            "percentage": "50",
                        }
                    ]
                },
                {
                    "id": 15,
                    "image": "https://img.icons8.com/color/150/000000/google-logo.png",
                    "time": "00:00:00",
                    "features":[
                        {
                            "feature":"glasses",
                            "percentage": "3",
                        },
                        {
                            "feature":"smiling",
                            "percentage": "10",
                        },
                        {
                            "feature":"looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature":"eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature":"mouth open",
                            "percentage": "50",
                        }
                    ]
                },
                {
                    "id": 16,
                    "image": "https://img.icons8.com/color/150/000000/google-logo.png",
                    "time": "00:00:00",
                    "features":[
                        {
                            "feature":"glasses",
                            "percentage": "3",
                        },
                        {
                            "feature":"smiling",
                            "percentage": "10",
                        },
                        {
                            "feature":"looking at camera",
                            "percentage": "30",
                        },
                        {
                            "feature":"eyes visible",
                            "percentage": "40",
                        },
                        {
                            "feature":"mouth open",
                            "percentage": "50",
                        }
                    ]
                }
            ]
        }
    ]
}

const Page2 = () => {

    return (
        <>
            <Header title="title of page 2" />
            <div className={`container`}>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <IFrameVideoCombined />
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
                <div className="row">
                    <ComboFaceContainer data={data} />
                </div>
            </div>

        </>
    );
};
export default Page2;