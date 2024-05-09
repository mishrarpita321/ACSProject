import EmojiPicker from "../Emotion/EmojiPicker";
import IFrame from "../IFrame/IFrame"
import IFrameVideo from "../IFrame/IFrameVideo";
import People from "../People/People";
import styles from './Combined.module.css'
import Header from "../Header/Header";
import TableLoader from "../table_placeholder_loader/TableLoader";
import ComparisonTable from "../Comparison/ComparisonTable";
import VideoPlayer from "../Combo/VideoPlayer/VideoPlayer";
import { useEffect, useRef, useState } from "react";
import UploadBtn from "../UploadButton/UploadBtn";
import Loader from "../Loader/Loader";
import PeopleVideo from "../People/PeopleVideo";
import ShowResponseTime from "../ShowResponseTime/ShowResponseTime";
import EmojiPlaceholder from "../Loader/EmojiPickerPlaceHolder/EmojiPlaceholder";
// import { motion } from 'framer-motion';
import { motion } from "framer-motion"
import FloatButton from "../FloatingButton/FloatButton";
import { useNavigate } from "react-router-dom";
import Slider from "../Slider/Slider";



const Combined = () => {
    const [sliderValueVideo, setSliderValueVideo] = useState(50);
    const [sliderValueVision, setSliderValueVision] = useState(50);

    const videoRef = useRef(null);
    const imagePeopleRef = useRef(null);
    const videoPeopleRef = useRef(null);

    const [videoSrc, setVideoSrc] = useState(null);
    const [imageSrc, setImageSrc] = useState(null);
    const [showEmojiImage, setShowEmojiImage] = useState(false);
    const [showPeopleVideo, setShowPeopleVideo] = useState(false);
    const [visionData, setVisionData] = useState([]);
    const [videoData, setVideoData] = useState([]);
    const [filteredVisionData, setVisiontFilteredData] = useState(null);
    const [visionEmojiClicked, setVisionEmojiClicked] = useState(false);
    const [showLoaderVision, setShowLoaderVision] = useState(false);
    const [showLoaderVideo, setShowLoaderVideo] = useState(false);

    const [showCompareBtn, setShowCompareBtn] = useState(false);
    const [showExploreMore, setShowExploreMore] = useState(false);

    const navigate = useNavigate();

    const [showTableLoader, setShowTableLoader] = useState(false);
    const [showSolutionComparison, setShowSolutionComparison] = useState(false);
    const tableLoaderRef = useRef(null);


    useEffect(() => {
        if (showEmojiImage && showPeopleVideo) {
            setShowCompareBtn(true);
        }
    }, [showEmojiImage, showPeopleVideo])


    useEffect(() => {
        if (visionEmojiClicked && imagePeopleRef.current) {
            imagePeopleRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [visionEmojiClicked]);
    useEffect(() => {
        if (showPeopleVideo && videoPeopleRef.current) {
            videoPeopleRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [showPeopleVideo]);


    useEffect(() => {
        if (showLoaderVideo) {
            setShowPeopleVideo(false);
            setVideoData([]);
        }

    }, [showLoaderVideo])

    useEffect(() => {
        if (showLoaderVision) {
            console.log("HHHHHHHHHHHHHHHHHH")
            // setShowPeopleVideo(false);
            setShowEmojiImage(false)
            setVisionEmojiClicked(false)
            setVisionData([]);
        }

    }, [showLoaderVision])







    const handleCompareClick = () => {
        setShowCompareBtn(false); // Hide the Compare button
        setShowTableLoader(true); // Show the TableLoader
    };

    useEffect(() => {
        if (showTableLoader) {
            // Ensure TableLoader is in the DOM and scroll into view
            tableLoaderRef.current?.scrollIntoView({ behavior: 'smooth' });

            // Set a timeout to hide TableLoader and show SolutionComparison after 5 seconds
            const timeoutId = setTimeout(() => {
                setShowTableLoader(false); // Hide the TableLoader
                setShowSolutionComparison(true); // Show the SolutionComparison
            }, 2000); // 5000 milliseconds = 5 seconds

            // Clear timeout if component unmounts or if the state changes before the timeout is reached
            return () => clearTimeout(timeoutId);
        }
    }, [showTableLoader]);

    useEffect(() => {
        if (showSolutionComparison) {
            // Set a timeout to hide TableLoader and show SolutionComparison after 5 seconds
            const timeoutId = setTimeout(() => {
                // setShowTableLoader(false); // Hide the TableLoader
                setShowExploreMore(true); // Show the SolutionComparison
            }, 5000); // 5000 milliseconds = 5 seconds

            // Clear timeout if component unmounts or if the state changes before the timeout is reached
            return () => clearTimeout(timeoutId);
        }
    }, [showSolutionComparison])





    const handleVideoSliderChange = (event) => {
        setSliderValueVideo(event.target.value);
    };
    const handleVisionSliderChange = (event) => {
        setSliderValueVision(event.target.value);
    };

    // const filteredImages = videoData.filter(image => image.confidence * 100 >= sliderValue);
    // console.log(videoData);

    return (
        <>
            <Header title="Vision API vs. Video Intelligence API" />
            <FloatButton title="Compare" onClick={handleCompareClick} isVisible={showCompareBtn} />
            {
                showSolutionComparison && <FloatButton title="Explore More" onClick={() => navigate('/combinedservice')} isVisible={showExploreMore} />
            }
            {/* <FloatButton title="Explore More" onClick={handleCompareClick} isVisible={!showExploreMore} /> */}
            <div className="container">
                <div style={{ position: "relative" }} className="row">
                    <div style={{ marginBottom: "30px" }} className={`col-12 col-md-6 ${styles.iFrameContainer}`}>
                        <h1 style={{ color: '#8e62a0', fontFamily: 'sans-serif' }}>Upload Video</h1>
                        <VideoPlayer
                            src={videoSrc}
                            onLoadedMetadata={() => { }}
                            // onTimeUpdate={(e) => setCurrentVideoTime(e.target.currentTime)}
                            videoRef={videoRef}
                        />
                        {/* the margintop gap needs to be analysed, gap is more than vision */}
                        {/* {showPeopleVideo && <ShowResponseTime respTime={videoData} />} */}
                        {showPeopleVideo && (
                            <motion.div
                                initial={{ x: 300 }}  // Start from 300 pixels to the right
                                animate={{ x: 0 }}  // End at the original position
                                transition={{ duration: 0.5, type: 'just' }}  // Customize the duration and type of transition
                            >
                                <ShowResponseTime data={videoData}  />
                            </motion.div>
                        )}
                        <UploadBtn setFileSrc={setVideoSrc} fileType="video" setShowLoader={setShowLoaderVideo} setVideoData={setVideoData} setShowFaces={setShowPeopleVideo} showLoader={showLoaderVideo} />
                        {showLoaderVideo && <EmojiPlaceholder height={"67"} width={"323"} />}
                        {showPeopleVideo && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transation={{ type: "spring", stiffness: 260, damping: 20, duration: 0.5 }}
                            >

                                < EmojiPicker
                                    // visionData={visionData}
                                    setFilteredData={() => { }}
                                    setShowFaces={() => { }}
                                />
                                <Slider
                                    value={sliderValueVideo}
                                    onChange={handleVideoSliderChange}
                                />
                            </motion.div>

                        )
                        }
                        {showPeopleVideo && (
                            // visionData && visionData.length > 0 && (
                            <div ref={videoPeopleRef}>
                                <PeopleVideo videoData={videoData} fileType="video" sliderValue={sliderValueVideo} />
                            </div>
                            // )
                        )}
                    </div>
                    <div className={`d-none d-lg-block ${styles.verticalLine}`}></div>
                    <div className={` col-12 d-md-none ${styles.horizontalLine}`}></div>
                    <div style={{ marginBottom: "30px" }} className={`col-12 col-md-6 ${styles.iFrameContainer}`}>
                        <h1 style={{ color: '#8e62a0', fontFamily: 'sans-serif' }}>Upload Image</h1>
                        <IFrame imageSrc={imageSrc} />
                        {showEmojiImage && (
                            <motion.div
                                initial={{ x: 300 }}  // Start from 300 pixels to the right
                                animate={{ x: 0 }}  // End at the original position
                                transition={{ duration: 0.5, type: 'just' }}  // Customize the duration and type of transition
                            >
                                <ShowResponseTime data={visionData} />
                            </motion.div>
                        )}
                        <UploadBtn setFileSrc={setImageSrc} fileType="image" setShowEmoji={setShowEmojiImage} setVisionData={setVisionData} setShowLoader={setShowLoaderVision} showLoader={showLoaderVision} />
                        {showLoaderVision && <EmojiPlaceholder height={"67"} width={"323"} />}
                        {showEmojiImage && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transation={{ type: "spring", stiffness: 260, damping: 20, duration: 0.5 }}
                            >

                                < EmojiPicker
                                    visionData={visionData}
                                    setFilteredData={setVisiontFilteredData}
                                    setShowFaces={setVisionEmojiClicked}
                                />
                                {visionEmojiClicked &&
                                    <Slider
                                        value={sliderValueVision}
                                        onChange={handleVisionSliderChange}
                                    />
                                }
                            </motion.div>

                        )
                        }
                        {visionEmojiClicked && (
                            <div ref={imagePeopleRef}>
                                <People filteredVisionData={filteredVisionData} sliderValue={sliderValueVision}/>
                            </div>
                        )}
                    </div>
                </div>


                {/* implementation is remaning */}
                {/* 
                <div style={{marginTop:`50px`}} className="row">
                    <TableLoader />
                    <ComparisonTable />
                </div>
                */}



                <motion.div
                    className={`${styles.box}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}
                />


                <div style={{ marginTop: "30px" }} className="row" ref={tableLoaderRef}>
                    {(showTableLoader || showSolutionComparison) && <>
                        < div className='col-md-12'>
                            <h1 style={{ color: '#8e62a0', fontFamily: 'sans-serif' }}>Comparison Table</h1>
                        </div></>
                    }
                    {showTableLoader && <TableLoader />}
                    {showSolutionComparison && <ComparisonTable />}
                </div>
            </div>
        </>
    );
};
export default Combined;