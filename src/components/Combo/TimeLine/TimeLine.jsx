// Timeline.js
import React from 'react';
import style from './TimeLine.module.css'; // Ensure you have this CSS file with styles for the timeline and tooltip
// import './Timeline.module.css'; // Ensure you have this CSS file with styles for the timeline and tooltip

const TimeLine = ({ faceData, videoLength, onTimestampClick }) => {
  const calculateLeftPosition = (time) => {
    const seconds = time.split(':').reduce((acc, time) => (60 * acc) + +time);
    return (seconds / videoLength) * 100;
  };

  return (
    <>
      <div>
        <div className={`${style.timeline}`}>
          <div className={`text-capitalize ${style.sentimentTitle}`}>
            {'faces'}
          </div>
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
