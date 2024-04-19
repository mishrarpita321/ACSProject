import React, { useState } from 'react';
import styles from './EmojiPicker.module.css'; // Make sure this points to the right file

const EmojiPicker = () => {
    const [selectedEmoji, setSelectedEmoji] = useState(null);

    const emojis = [
        { id: 'smile', symbol: '😀', label: 'Smile' },
        { id: 'angry', symbol: '😡', label: 'Angry' },
        { id: 'sad', symbol: '😢', label: 'Sad' },
        { id: 'joyful', symbol: '😂', label: 'Joyful' }
    ];

    const handleEmojiClick = (emojiId) => {
        setSelectedEmoji(emojiId);
    };

    return (
        <div className={styles.emojiContainer}>
            {emojis.map((emoji) => (
                <div
                    key={emoji.id}
                    className={`${styles.emojiWrapper} ${selectedEmoji === emoji.id ? styles.selected : ''}`}
                    onClick={() => handleEmojiClick(emoji.id)}
                >
                    <div className={styles.emoji}>{emoji.symbol}</div>
                    <div className={styles.label}>{emoji.label}</div>
                </div>
            ))}
        </div>
    );
};

export default EmojiPicker;
