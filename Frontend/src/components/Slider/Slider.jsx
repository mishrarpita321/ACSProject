import React from 'react';
import styles from './Slider.module.css'; // Import the styles

const Slider = ({ value, onChange, min = 0, max = 100 }) => {
    return (
        <div className={styles.sliderContainer}> {/* Use the sliderContainer class */}
            <div style={{color:"#8e62a0"}}>confidence</div> {/* Use the sliderValue class for the value display */}
            <div style={{display:"flex",alignItems:"center"}}>
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={value}
                    onChange={onChange}
                    className={styles.slider} // Use the slider class
                />

                <div style={{color:"#8e62a0"}} className={styles.sliderValue}>{value}%</div> {/* Use the sliderValue class for the value display */}
            </div>
        </div>
    );
};

export default Slider;
