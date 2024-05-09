import styles from './Emoji.module.css';

const Emoji = () => {
    return (
        <div className={styles.emojirow}>
            <button className={styles.emoji} id="joy">😊</button>
            <button className={styles.emoji} id="anger">😡</button>
            <button className={styles.emoji} id="sorrow">😢</button>
            <button className={styles.emoji} id="sorrow">🥰</button>
        </div>
    );
}

export default Emoji;