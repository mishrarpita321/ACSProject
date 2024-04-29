import React, { useState } from 'react';
import styles from './UploadBtn.module.css';
import axios from 'axios';
import transformApiResponse from '../Utils/Transformdata';

const UploadBtn = ({ widthInPercentage = "60%", setFileSrc, setShowEmoji, fileType, setVisionData }) => {
    const apiResponse = {
        "timeTaken": "2sec",
        "joyful": [
            "https://res.cloudinary.com/demo/image/upload/c_thumb,g_face,h_200,w_200/r_max/f_auto/woman-blackdress-stairs.png"
        ],
        "anger": [
            "https://res.cloudinary.com/demo/image/upload/leather_bag_gray.jpg"
        ],
        "sorrow": [
            "https://res.cloudinary.com/demo/image/upload/ar_1.0,c_thumb,g_face,w_0.7/r_max/co_skyblue,e_outline/co_lightgray,e_shadow,x_5,y_8/docs/blue_sweater_model.png"
        ],
        "surprise": [
            "https://res.cloudinary.com/demo/image/upload/water-park-aerial-view.jpg",
            "https://res.cloudinary.com/demo/image/upload/v1699883548/water-park-aerial-view.jpg",
            "https://res.cloudinary.com/demo/image/upload/ar_1.0,c_thumb,g_face,w_0.7/r_max/co_skyblue,e_outline/co_lightgray,e_shadow,x_5,y_8/docs/blue_sweater_model.png",
            "https://res.cloudinary.com/demo/image/upload/leather_bag_gray.jpg",
            "https://res.cloudinary.com/demo/image/upload/c_thumb,g_face,h_200,w_200/r_max/f_auto/woman-blackdress-stairs.png"



        ]
    };

    const handleFileChange = async (e) => {  // Added async keyword here
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setFileSrc(url);
            const formData = new FormData();
            formData.append('image', file);
            console.log('image', file);

            const visionData = transformApiResponse(apiResponse);
            setShowEmoji(true);
            setVisionData(visionData);

            // try {
            //     const response = await axios.post('http://localhost:3000/upload', formData, {
            //         headers: {
            //             'Content-Type': 'multipart/form-data'
            //         },
            //     });
            //     console.log(`data from api ${response.data}`);
            //     if (response.status === 200) {
            //         setShowEmoji(true);
            //     }
            // } catch (error) {
            //     console.error('Error:', error);
            // }
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