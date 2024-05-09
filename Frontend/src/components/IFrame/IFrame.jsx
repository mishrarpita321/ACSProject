import React, { useState } from 'react';
import styles from './IFrame.module.css';

const IFrame = ({imageSrc}) => {

    return (
        <>
            <div className={styles.iframeContainer}> {/* Responsive container */}
                <iframe
                    title="file-preview"
                    srcDoc={imageSrc ? `<style>body, html {width: 100%; height: 100%; margin: 0; padding: 0; overflow: hidden;}</style><img src="${imageSrc}" style="width: 100%; height: 100%; object-fit: cover;" />` : ''}
                    // src={imageSrc ? imageSrc : ''}
                    allowFullScreen
                    className={styles.iframe}
                />
            </div>
        </>
    );
};

export default IFrame;
