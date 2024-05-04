import React, { useEffect, useState } from 'react';
import styles from './People.module.css';

const PeopleVideo = ({ videoData,sliderValue }) => {
    const [faces, setFaces] = useState([]);

    useEffect(() => {
        const smilingData = videoData.length !== 0 ? videoData.data.find(item => item.attributes === 'smiling') : null;
        if (smilingData && smilingData.faces) {
            const filteredFaces = smilingData.faces.filter(face => face.confidence * 100 >= sliderValue);

            // setFaces(smilingData.faces);
            setFaces(filteredFaces);
        } else {
            setFaces([]);
        }
    }, [videoData,sliderValue]); // Dependency on videoData

    return (
        <div className={styles.people}>
            {faces.length > 0 ? (
                faces.map((face, idx) => (
                    <div key={idx} className={styles.imgcontainer} title={face.confidence}>
                        <img
                            src={face.img}
                            alt={`Person ${idx + 1}`}
                            className={styles.image}
                            onError={(e) => e.target.src = 'https://via.placeholder.com/150'}
                        />
                    </div>
                ))
            ) : (
                <div className={styles.imgcontainer}>
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Person"
                        className={styles.image}
                    />
                </div>
            )}
        </div>
    );
};

export default PeopleVideo;
