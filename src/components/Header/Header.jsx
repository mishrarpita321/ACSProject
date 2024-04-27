import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = ({ title = "", setFileSrc, showCompareBtn = false }) => {
    return (
        <>
            <div className={styles.appBar}>
                {/* <h1 className={styles.appBarTitle}>Vision API vs. Video Intelligence API</h1> */}
                <h1 className={styles.appBarTitle}>{title}</h1>
            </div>
            {showCompareBtn && (
                <div className={styles.floating_btn}>
                    &#x1F50D; Compare
                </div>
            )}
        </>
    );
};

export default Header;