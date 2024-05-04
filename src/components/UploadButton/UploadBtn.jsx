import React, { useState, useRef } from 'react';
import styles from './UploadBtn.module.css';
import axios from 'axios';
import transformApiResponse from '../Utils/Transformdata';
import Loader from '../Loader/Loader';
import { BsArrowClockwise } from "react-icons/bs"; // Importing the refresh icon from react-icons

const UploadBtn = ({ widthInPercentage = "60%", setFileSrc, setShowEmoji, fileType, setVisionData, setShowLoader, showLoader, setVideoData, setShowFaces }) => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const [uploadError, setUploadError] = useState(false);
    const fileInputRef = useRef(null);

    const [justifyContent, setJustifyContent] = useState('space-between');

    const handleFileChange = async (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            setFile(newFile);
            setFileName(newFile.name); // Set file name for display
            uploadFile(newFile);
        }
    };

    const uploadFile = async (fileToUpload) => {
        setJustifyContent('unset');
        setUploadError(false);
        setShowLoader(true);
        const formData = new FormData();
        formData.append(fileType === 'video' ? 'video' : 'image', fileToUpload);
        const url = URL.createObjectURL(fileToUpload);
        setFileSrc(url);

        try {
            const response = await axios.post(
                fileType === 'video' ? 'https://acs-example1.ey.r.appspot.com/api/videointelligence' : 'https://acs-example1.ey.r.appspot.com/api/vision',
                formData,
                { headers: { 'Content-Type': 'multipart/form-data' } }
            );

            if (response.status === 200) {
                const data = fileType === 'video' ? response.data : transformApiResponse(response.data);
                if (fileType === 'video') {
                    setVideoData(data);
                    setShowFaces(true);
                } else {
                    setVisionData(data);
                    setShowEmoji(true);
                }
            }
        } catch (error) {
            console.error('Upload Error:', error);
            setUploadError(true);
        } finally {
            setShowLoader(false);
            setJustifyContent('space-between');
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    const retryUpload = () => {
        if (file) {
            fileType === 'video' ? setShowFaces(false) : setShowEmoji(false);
            uploadFile(file);
        }
    };

    return (
        <div className={styles.uploadbtn} style={{ '--btnWidth': widthInPercentage, '--justyfyContent': justifyContent }}>
            {showLoader ? (
                <>
                    <Loader isVisible={showLoader} />
                    <div style={{ marginLeft: "18px" }}>Please Wait...</div>
                </>
            ) : (
                <>
                    <input
                        type="file"
                        id="file-upload"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept={fileType === 'video' ? 'video/*' : 'image/png, image/jpeg'}
                        style={{ display: 'none' }}
                    />
                    <div className={styles.flexContainer}>
                        <button onClick={triggerFileInput} className={styles.customFileUpload}>
                            Upload
                        </button>
                        <span className={styles.fileName}>{fileName || 'No file chosen'}</span>
                        {fileName && <BsArrowClockwise style={{ height: "36px", width: "36px", minWidth: "36px", cursor: "pointer" }} onClick={retryUpload} />}
                    </div>

                    {uploadError && <div className={styles.errorMsg}>Upload failed. Please retry.</div>}
                </>
            )}
        </div>
    );
};

export default UploadBtn;
