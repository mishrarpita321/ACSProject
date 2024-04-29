import React from 'react';
import styles from './People.module.css';

const People = ({ filteredVisionData }) => {
  return (
    <div className={styles.people}>
      {filteredVisionData.map((person, index) => (
        <div key={index} className={styles.imgcontainer}>
          {person.faces.map((face, idx) => (
            <img
              key={face.id}
              src={face.img}
              alt={`Person ${idx + 1}`}
              className={styles.image}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

      export default People;
