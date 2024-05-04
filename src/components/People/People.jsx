import React from 'react';
import styles from './People.module.css';
import notFound from '../../../public/not_available.png';

const People = ({ filteredVisionData, sliderValue }) => {
  console.log('People', filteredVisionData,sliderValue);
  const confidenceThreshold = sliderValue / 100;
  const validFaces = filteredVisionData.filter(face => face.detectionConfidence >= confidenceThreshold);

  return (    
    <div className={styles.people}>
      {validFaces.length > 0 ? (
        validFaces.map((face, idx) => (
          <div title={face.detectionConfidence} key={idx} className={styles.imgcontainer}>
            <img
              key={face.id}
              src={face.imageUrl}
              alt={`Person ${idx + 1}`}
              className={styles.image}
            />
          </div>
        ))) : (
        <div className={styles.imgcontainer}>
          <img
            // src="https://via.placeholder.com/150"
            src={notFound}
            alt="Person"
            className={styles.image}
          />
        </div>
      )}
    </div>
  );
};

export default People;
