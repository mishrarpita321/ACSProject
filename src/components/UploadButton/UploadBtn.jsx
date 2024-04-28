import React, { useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import styles from './UploadBtn.module.css';


const UploadBtn = ({widthInPercentage = "60%", setFileSrc ,setShowEmoji}) => {
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setFileSrc(url);
            setShowEmoji(true);
        }
    };

    return (
        <div className={styles.uploadbtn} style={{'--btnWidth':widthInPercentage}}>
            <input type="file" id="file-upload" onChange={handleFileChange} />
        </div>
    );
};

export default UploadBtn;