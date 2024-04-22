// ComparisonTable.js

import React from 'react';
import styles from './ComparisonTable.module.css'; // Import the CSS module
import { FaCheck, FaTimes } from 'react-icons/fa'; // Import Font Awesome icons


const APIList = [
  {
    name: 'Vision API',
    titleColor: '#f9763e',
  },
  {
    name: 'Video Intelligence API',
    titleColor: '#4dcdac',
  },
  // Add more API objects as needed
];
// Define your dynamic data for solutions
// const solutionData = [
//   {
//     iconPath: 'https://via.placeholder.com/150',
//     solutionName: 'Solution A',
//     content1: 'Roshan content for Solution A',
//     content2: 'Devkota content for Solution A',
//     themeColor: '#8BC34A', // Example green color
//   },
//   {
//     iconPath: 'https://via.placeholder.com/150',
//     solutionName: 'Solution B',
//     content1: 'Roshan content for Solution B',
//     content2: 'Devkota content for Solution B',
//     themeColor: '#FFC107', // Example amber color
//   },
//   // Add more solution objects as needed
// ];



const solutionData = [
  {
    iconPath: 'https://img.icons8.com/color/150/000000/google-logo.png', // A placeholder icon
    basis: 'Service Type',
    content1: 'Image analysis service for detecting and classifying objects within images.',
    content2: 'Video analysis service for annotating and understanding video content.',
    themeColor: '#4285F4', // Google blue
  },
  {
    iconPath: 'https://img.icons8.com/color/150/000000/money.png', // A placeholder icon
    basis: 'Price',
    content1: 'Priced per 1,000 images processed, with a free tier available.',
    content2: 'Priced per minute of video processed, with a free tier available.',
    themeColor: '#0F9D58', // Google green
  },
  {
    iconPath: 'https://img.icons8.com/color/150/000000/speedometer.png', // A placeholder icon
    basis: 'Speed',
    content1: 'Can analyze a large batch of images quickly, often in real-time.',
    content2: 'Video analysis may take longer, depending on video length and complexity.',
    themeColor: '#F4B400', // Google yellow
  },
  {
    iconPath: 'https://img.icons8.com/color/150/000000/scales.png', // A placeholder icon
    basis: 'Accuracy',
    content1: 'Highly accurate with static images, especially with clear visibility.',
    content2: 'High accuracy, but can be influenced by video quality and motion blur.',
    themeColor: '#DB4437', // Google red
  },
  {
    iconPath: 'https://img.icons8.com/color/150/000000/happy.png', // A placeholder icon for emotion detection
    basis: 'Emotion Detection',
    content1: 'Capable of detecting emotional expressions on faces in images.',
    content2: 'Does not provide emotion detection in its current feature set.',
    themeColor: '#812787', // Google yellow
  },
  {
    iconPath: 'https://img.icons8.com/color/150/000000/settings.png', // A placeholder icon
    basis: 'Customization',
    content1: 'Customizable and can train custom models with AutoML Vision.',
    content2: 'Customizable with the ability to train custom models with AutoML Video Intelligence.',
    themeColor: '#0F9D58', // Google green
  },
  {
    iconPath: 'https://img.icons8.com/color/150/000000/group-of-projects.png', // A placeholder icon
    basis: 'Best Use Case',
    content1: 'Ideal for apps that require detailed analysis of still images for objects, text, and landmarks.',
    content2: 'Suited for apps that need to search, discover, and understand video content at scale.',
    themeColor: '#4285F4', // Google blue
  },
  // ...add more comparisons if necessary
];




const ComparisonTable = () => {





  return (
    <>
      {/* <div className='row'>
        <div className='col-md-12'>
          <h1 className={styles.heading}>Comparison Table</h1>
        </div>
      </div> */}
      <div className={styles.tabelContainer} style={{ height: '100vh' }}>
        <div className='row'>
          <div className='col-3'></div>
          <div className={`col ${styles.tableHeading} ${styles.tableCell}`} style={{ backgroundColor: APIList[0].titleColor}}>
            {APIList[0].name}
          </div>
          <div className={`col ${styles.tableHeading} ${styles.tableCell}`} style={{ backgroundColor: APIList[1].titleColor}}>
            {APIList[1].name}
          </div>
        </div>
        {solutionData.map((solution, index) => (
          <div key={index} className={`row ${styles.tableRow}`}>
            <div className={`col-3 ${styles.tableCell}`} style={{ paddingRight: 0 }}>
              <div className={`${styles.solutionBlock}`}>
                <div className={`${styles.solutionIconBox} d-none d-md-flex `} style={{'--border-color':solution.themeColor}}>
                  <img src={solution.iconPath} alt={solution.solutionName} className={`${styles.solutionIcon} img-fluid`} />
                </div>
                <div className={styles.solutionNameBlock}>
                  <div className={`${styles.solutionNameLine} d-none d-md-block`} style={{'--border-color':solution.themeColor}} ></div>
                  <div className={`${styles.solutionNameText}`}>{solution.basis}</div>
                </div>
              </div>
            </div>
            <div className={`col ${styles.tableCell} ${styles.compText}`}>
              {solution.content1}
            </div>
            <div className={`col ${styles.tableCell} ${styles.compText}`}>
              {solution.content2}
            </div>
          </div>
        ))
        }




      </div>
    </>
  );
};

export default ComparisonTable;
