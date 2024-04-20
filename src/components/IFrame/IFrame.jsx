import UploadBtn from "../UploadButton/UploadBtn";
import React, { useState } from 'react';
import styles from './IFrame.module.css';

const IFrame = () => {
    const [fileSrc, setFileSrc] = useState(null);
    return (
        <>
            <div className={styles.iframe}> 
                <iframe
                    title="file-preview"
                    srcDoc={fileSrc ? `<style>body, html {width: 100%; height: 100%; margin: 0; padding: 0; overflow: hidden;}</style><img src="${fileSrc}" style="width: 100%; height: 100%; object-fit: cover;" />` : ''}
                    allowFullScreen
                    style={{
                        width: '533px',
                        height: '300px',
                        border: '1px solid black',
                        backgroundColor: '#e9ecef',
                    }}
                />
                <UploadBtn setFileSrc={setFileSrc} />
            </div>
        </>
    );
};

export default IFrame;