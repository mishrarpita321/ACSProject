import EmojiPicker from "../Emotion/EmojiPicker";
import IFrame from "../IFrame/IFrame"
import IFrameVideo from "../IFrame/IFrameVideo";
import People from "../People/People";
import styles from './Combined.module.css'
import Header from "../Header/Header";

const Combined = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 style={{ color: '#8e62a0', fontFamily: 'sans-serif' }}>Upload Video</h1>
                        <IFrameVideo />
                    </div>
                    <div className={`col-md-1 ${styles.verticalLine}`}></div>
                    <div className="col-md-5">
                        <h1 style={{ color: '#8e62a0', fontFamily: 'sans-serif' }}>Upload Image</h1>
                        <IFrame />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="col-md-8">
                            <EmojiPicker />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="col-md-8">
                            <EmojiPicker />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <People />
                    </div>
                    <div className="col-md-6">
                        <People />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Combined;