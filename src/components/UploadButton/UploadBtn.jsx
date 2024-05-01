import React, { useState } from 'react';
import styles from './UploadBtn.module.css';
import axios from 'axios';
import transformApiResponse from '../Utils/Transformdata';

const UploadBtn = ({ widthInPercentage = "60%", setFileSrc, setShowEmoji, fileType, setVisionData, setShowLoader, setVideoData, setShowFaces }) => {
    const handleFileChange = async (e) => {  // Added async keyword here
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setFileSrc(url);
            const formData = new FormData();
            formData.append('image', file);
            // Pending: on reupload old data should be removed

            if (fileType === 'video') {
                // setShowLoader(true);
                // const response = await axios.post('http://localhost:3000/upload', formData, {
                //     headers: {
                //         'Content-Type': 'multipart/form-data'
                //     },
                // });
                // const visionData = transformApiResponse(response.data);
                // if (response.status === 200) {
                //     setVideoData(visionData);
                //     setShowLoader(false);
                // }
                setShowFaces(true);
                setVideoData([{
                    "responseTime": "2 seconds",
                    "data": 
                      {
                        "emo": "smiling",
                        "faces": [
                          {
                            "faceid": "sdf",
                            "img": "https://via.placeholder.com/150",
                            "timestamp": "2s"
                          },
                          {
                            "faceid": "sdf",
                            "img": "https://via.placeholder.com/150",
                            "timestamp": "2sec"
                          },
                          {
                            "faceid": "sdf",
                            "img": "https://via.placeholder.com/150",
                            "timestamp": "2sec"
                          },
                          {
                            "faceid": "sdf",
                            "img": "https://via.placeholder.com/150",
                            "timestamp": "2sec"
                          }
                        ]
                      }
                  }]);
            } else {
                setShowLoader(true);
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
            <input
                type="file"
                id="file-upload"
                onChange={handleFileChange}
                accept={fileType === 'video' ? 'video/*' : 'image/png, image/jpeg'}
            />
        </div>
    );
};

export default UploadBtn;