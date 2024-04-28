import React, { useState } from 'react';
import styles from './IFrame.module.css';

const IFrameVideoCombined = () => {
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
        </>
    );
};

export default IFrameVideoCombined;
