import EmojiPicker from "../Emotion/EmojiPicker";
import IFrame from "../IFrame/IFrame"
import IFrameVideo from "../IFrame/IFrameVideo";
import People from "../People/People";
import styles from './Combined.module.css'
import Header from "../Header/Header";
import TableLoader from "../table_placeholder_loader/TableLoader";
import ComparisonTable from "../Comparison/ComparisonTable";

const Combined = () => {
    return (
        <>
            <Header title="Vision API vs. Video Intelligence API" />
            <div className="container">
                <div style={{ position: "relative" }} className="row">
                    <div className={`col-12 col-md-6 ${styles.iFrameContainer}`}>
                        <h1 style={{ color: '#8e62a0', fontFamily: 'sans-serif' }}>Upload Video</h1>
                        <IFrameVideo />
                        <EmojiPicker />
                        <People />
                    </div>
                    <div className={`d-none d-lg-block ${styles.verticalLine}`}></div>
                    <div className={` col-12 d-md-none ${styles.horizontalLine}`}></div>
                    <div className={`col-12 col-md-6 ${styles.iFrameContainer}`}>
                        <h1 style={{ color: '#8e62a0', fontFamily: 'sans-serif' }}>Upload Image</h1>
                        <IFrame />
                        <EmojiPicker />
                        <People />
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