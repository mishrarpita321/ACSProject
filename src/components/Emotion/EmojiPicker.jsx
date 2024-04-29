import React, { useState } from 'react';
import styles from './EmojiPicker.module.css'; // Make sure this points to the right file
import transformApiResponse from '../Utils/Transformdata';

const EmojiPicker = ({setShowEmoji, setEmojiClicked}) => {
    const [selectedEmoji, setSelectedEmoji] = useState(null);

    setShowEmoji(false); //This will be set to true on successful data fetching
    setEmojiClicked(false); //This will be set to true on click of an emoji. Based on this state, the People component will be rendered in combined component

    const emojis = [
        { id: 'smile', symbol: '😀', label: 'Smile' },
        { id: 'angry', symbol: '😡', label: 'Angry' },
        { id: 'sad', symbol: '😢', label: 'Sad' },
        { id: 'joyful', symbol: '😂', label: 'Joyful' }
    ];

    const handleEmojiClick = (emojiId) => {
        setSelectedEmoji(emojiId);
    };

    const apiResponse = {
        "timeTaken": "2sec",
        "joyful": [
            "https://res.cloudinary.com/demo/image/upload/c_thumb,g_face,h_200,w_200/r_max/f_auto/woman-blackdress-stairs.png"
        ],
        "anger": [
            "https://res.cloudinary.com/demo/image/upload/leather_bag_gray.jpg"
        ],
        "sorrow": [
            "https://res.cloudinary.com/demo/image/upload/ar_1.0,c_thumb,g_face,w_0.7/r_max/co_skyblue,e_outline/co_lightgray,e_shadow,x_5,y_8/docs/blue_sweater_model.png"
        ],
        "surprise": [
            "https://res.cloudinary.com/demo/image/upload/water-park-aerial-view.jpg",
            "https://res.cloudinary.com/demo/image/upload/v1699883548/water-park-aerial-view.jpg"
        ]
    };

    console.log(transformApiResponse(apiResponse));

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
