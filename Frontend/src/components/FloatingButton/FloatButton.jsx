import React, { useState } from 'react';
import styles from './FloatButton.module.css';

const FloatButton = ({ title = "", onClick = () => { }, isVisible = true }) => {
    return (
        <>
            {isVisible && (
                <div onClick={onClick} className={styles.floating_btn}>
                    &#x1F50D; {title}
                </div>
            )}

        </>
    );
};

export default FloatButton;