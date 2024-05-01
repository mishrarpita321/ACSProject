import React from 'react';
import styles from './People.module.css';

const People = ({ filteredVisionData }) => {
  const arrLen = filteredVisionData[0].faces ? filteredVisionData[0].faces.length : 0;
  
  return (    
    <div className={styles.people}>
      {arrLen ? (
        filteredVisionData[0].faces.map((face, idx) => (
          <div key={idx} className={styles.imgcontainer}>
            <img
              key={face.id}
              src={face.img}
              alt={`Person ${idx + 1}`}
              className={styles.image}
            />
          </div>
        ))) : (
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

export default People;
