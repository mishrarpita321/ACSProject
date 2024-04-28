import React, { useState } from 'react';
import UploadBtn from "../UploadButton/UploadBtn";
import styles from './IFrame.module.css';

const IFrame = ({fileType}) => {
    const [fileSrc, setFileSrc] = useState(null);
    return (
        <>
            <div className={styles.iframeContainer}> {/* Responsive container */}
                <iframe
                    title="file-preview"
                    srcDoc={fileSrc ? `<style>body, html {width: 100%; height: 100%; margin: 0; padding: 0; overflow: hidden;}</style><img src="${fileSrc}" style="width: 100%; height: 100%; object-fit: cover;" />` : ''}
                    allowFullScreen
                    className={styles.iframe}
                />
            </div>
            <UploadBtn setFileSrc={setFileSrc} fileType={fileType} />
        </>
    );
};

export default IFrame;
