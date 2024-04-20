import UploadBtn from "../UploadButton/UploadBtn";
import React, { useState } from 'react';
import styles from './IFrame.module.css';

const IFrameVideo = () => {
    const [fileSrc, setFileSrc] = useState(null);
    return (
        <>
            <div className={styles.iframevideo}>
                <iframe
                    title="file-preview"
                    // src={fileSrc ? fileSrc : 'https://www.youtube.com/embed/dQw4w9WgXcQ'}
                    // src={fileSrc}
                    src={fileSrc}
                    allowFullScreen
                    style={{
                        width: '533px',
                        height: '300px',
                        border: '1px solid black',
                        backgroundColor: '#e9ecef',
                    }}
                />
            </div>
            <UploadBtn setFileSrc={setFileSrc} />
        </>
    );
};

export default IFrameVideo;