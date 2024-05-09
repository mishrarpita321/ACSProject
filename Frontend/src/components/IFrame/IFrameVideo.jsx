import React, { useState } from 'react';
import UploadBtn from "../UploadButton/UploadBtn";
import styles from './IFrame.module.css';

const IFrameVideo = ({fileType}) => {
    const [fileSrc, setFileSrc] = useState(null);
    return (
        <>
            <div className={styles.iframeContainer}>
                <iframe
                    title="file-preview"
                    src={fileSrc}
                    allowFullScreen
                    className={styles.iframevideo}
                    style={{
                        border: 'none',  // Border handled by container
                        backgroundColor: fileSrc ? 'transparent' : '#e9ecef'  // Background conditional on content
                    }}
                />
            </div>
            <UploadBtn setFileSrc={setFileSrc} fileType={fileType} /> 
        </>
    );
};

export default IFrameVideo;
