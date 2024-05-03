import React, { useState } from 'react';
import styles from './UploadBtn.module.css';
import axios from 'axios';
import transformApiResponse from '../Utils/Transformdata';
import Loader from '../Loader/Loader';

const UploadBtn = ({ widthInPercentage = "60%", setFileSrc, setShowEmoji, fileType, setVisionData, setShowLoader, showLoader, setVideoData, setShowFaces }) => {
    const handleFileChange = async (e) => {  // Added async keyword here
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setFileSrc(url);
            const formData = new FormData();
            // Pending: on reupload old data should be removed

            if (fileType === 'video') {
                setShowLoader(true);
                formData.append('video', file);
                const response = await axios.post('https://acs-example1.ey.r.appspot.com/api/videointelligence', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                });
                if (response.status === 200) {
                    setVideoData(response.data);
                    setShowLoader(false);
                    setShowFaces(true);
                }
            } else {
                setShowLoader(true);
                formData.append('image', file);
                try {
                    const response = await axios.post('http://localhost:3000/upload', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        },
                    });
                    const visionData = transformApiResponse(response.data);
                    if (response.status === 200) {
                        setVisionData(visionData);
                        setShowEmoji(true);
                        setShowLoader(false);
                    }
                } catch (error) {
                    console.error('Error:', error);
                }
            }
        }
    };

    return (
        <div className={styles.uploadbtn} style={{ '--btnWidth': widthInPercentage }}>
            {/* <Loader isVisible={showLoader} /> */}

            {showLoader ? (
                <>
                    <Loader isVisible={showLoader} />
                    <div style={{marginLeft:"18px"}}>Please Wait ...</div>
                </>
            ) :
                <input
                    type="file"
                    id="file-upload"
                    onChange={handleFileChange}
                    accept={fileType === 'video' ? 'video/*' : 'image/png, image/jpeg'}
                />
            }

            {/* <input
                type="file"
                id="file-upload"
                onChange={handleFileChange}
                accept={fileType === 'video' ? 'video/*' : 'image/png, image/jpeg'}
            /> */}
            {/* <Loader /> */}

        </div>
    );
};

export default UploadBtn;