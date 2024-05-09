// Timeline.js
import React from 'react';
import style from './TimeLine.module.css'; // Ensure you have this CSS file with styles for the timeline and tooltip
// import './Timeline.module.css'; // Ensure you have this CSS file with styles for the timeline and tooltip

const TimeLine = ({ faceData, videoLength, onTimestampClick }) => {
  console.log('faceData from TimeLine', faceData);
  const calculateLeftPosition = (time) => {
    // const seconds = time.split(':').reduce((acc, time) => (60 * acc) + +time);
    const seconds = parseFloat(time.replace('sec', ''));
    return (seconds / videoLength) * 100;
  };

  return (
    <>
      {/* <div className='col'> */}
      <div className={`col ${style.titleContainer}`}>
        <div className={` text-capitalize ${style.title}`}>
          {`faces (${faceData.length})`}
        </div>
      </div>
      <div className={`col`}>
        <div className={` ${style.timeline}`}>
          {faceData.map((face, index) => (
            <div
              key={index}
              className={`${style.timestamp}`}
              style={{ left: `${calculateLeftPosition(face.time)}%` }}
              onClick={() => onTimestampClick(face.time)}
            >
              <Tooltip face={face} />
            </div>
          ))}
        </div>
      </div>

      {/* </div> */}
    </>
  );
};

const Tooltip = ({ face }) => (
  <div className={`${style.tooltip}`}>
    <img src={face.image} alt="Face" />
    <span>{face.time}</span>
  </div>
);

export default TimeLine;
