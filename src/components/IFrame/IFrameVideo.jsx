import UploadBtn from "../UploadButton/UploadBtn";
import React, { useState } from 'react';

const IFrameVideo = () => {
    const [fileSrc, setFileSrc] = useState(null);
    return (
        <>
            <iframe
                title="file-preview"
                src={fileSrc}
                allowFullScreen
                style={{
                    width: '100%',
                    height: '400px',
                    border: '1px solid black',
                    backgroundColor: 'transparent',
                }}
            />
            <UploadBtn setFileSrc={setFileSrc} />
        </>
    );
};

export default IFrameVideo;