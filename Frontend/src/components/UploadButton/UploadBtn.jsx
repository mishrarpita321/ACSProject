import React, { useState, useRef, useEffect } from 'react';
import styles from './UploadBtn.module.css';
import axios from 'axios';
import transformApiResponse from '../Utils/Transformdata';
import Loader from '../Loader/Loader';
import { BsArrowClockwise } from "react-icons/bs"; // Importing the refresh icon from react-icons
import transformCombinedApiResponse from '../Utils/transformCombinedApiResponse';

const UploadBtn = ({ widthInPercentage = "60%", setCombinedData, setFileSrc, setShowEmoji, fileType, setVisionData, setShowLoader, showLoader, setVideoData, setShowFaces }) => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const [uploadError, setUploadError] = useState(false);
    const fileInputRef = useRef(null);
    const [apiType, setApiType] = useState('imge');

    const [justifyContent, setJustifyContent] = useState('space-between');




    useEffect(() => {   // This useEffect will be called whenever the fileType changes
        if (fileType === 'video') {
            setApiType('video');
        } else if (fileType === 'image') {
            setApiType('image');
        } else {
            setApiType('combined');
        }
    }, [fileType]);


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
        const url = URL.createObjectURL(fileToUpload);
        setFileSrc(url);

        let apiEndpoint = '';


        if (fileType === 'image') {
            apiEndpoint = 'https://acs-example1.ey.r.appspot.com/api/vision'; // Default API endpoint
            formData.append('image', fileToUpload);
        } else if (fileType === 'video') {
            apiEndpoint = 'https://acs-example1.ey.r.appspot.com/api/videointelligence';
            formData.append('video', fileToUpload);
        } else if (apiType === 'combined') {
            formData.append('video', fileToUpload);
            apiEndpoint = 'https://acs-example1.ey.r.appspot.com/api/combined'; // API endpoint for combined data
        }



        try {
            const response = await axios.post(
                apiEndpoint,
                formData,
                { headers: { 'Content-Type': 'multipart/form-data' } }
            );

            if (response.status === 200) {
                console.log('Upload Success:', response.data);
                // if (fileType === 'video') {
                // } else if (fileType === 'image') {
                // }
                // else {
                // }
                let data = response.data;


                // data = fileType === 'video' ? response.data : transformApiResponse(response.data);

                if (fileType === 'video') {
                    data= response.data;
                    setVideoData(data);
                    setShowFaces(true);
                } else if (fileType === 'image') {
                    data = transformApiResponse(response.data);
                    setVisionData(data);
                    setShowEmoji(true);
                }else {
                    data = transformCombinedApiResponse(response.data);
                    setCombinedData(data);
                    setShowFaces(true);
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
            fileType === 'video' || 'combined' ? setShowFaces(false) : setShowEmoji(false);
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
                        accept={fileType === 'video' || fileType === 'combined' ? 'video/*' : 'image/png, image/jpeg'}
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
