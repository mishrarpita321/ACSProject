import React from 'react';
import styles from './People.module.css';

const People = ({ filteredVisionData }) => {
  console.log(filteredVisionData);
  return (
    // <div className={styles.people}>
    //   {filteredVisionData.map((person, index) => (
    //     <div key={index} className={styles.imgcontainer}>
    //       {person.faces.map((face, idx) => (
    //         <img
    //           key={face.id}
    //           src={face.img}
    //           alt={`Person ${idx + 1}`}
    //           className={styles.image}
    //         />
    //       ))}
    //     </div>
    //   ))}
    // </div>

    <div className={styles.people}>


      {filteredVisionData[0].faces.map((face, idx) => (
        <div key={idx} className={styles.imgcontainer}>
          <img
            key={face.id}
            src={face.img}
            alt={`Person ${idx + 1}`}
            className={styles.image}
          />
        </div>
      ))}


    </div>
  );
};

export default People;
