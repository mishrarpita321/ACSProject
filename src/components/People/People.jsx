import React from 'react';
import styles from './People.module.css';

const People = () => {
  const people = [
    'Nachweis_Passfoto.jpg',
    'Nachweis_Passfoto.jpg',
    'Nachweis_Passfoto.jpg'
  ];

  return (
    <div className={styles.people}>
      {people.map((person, index) => (
        <div key={index} className={styles.imgcontainer}>
          <img src={person} alt={`Person ${index + 1}`} className={styles.image} />
        </div>
      ))}
    </div>
  );
};

export default People;
