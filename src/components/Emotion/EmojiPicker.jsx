import React, { useState } from 'react';
import styles from './EmojiPicker.module.css'; // Make sure this points to the right file
import { useEffect } from 'react';

const EmojiPicker = ({visionData=null, setFilteredData, setShowFaces}) => {
    const [selectedEmoji, setSelectedEmoji] = useState(null);
    const [emojis, setEmojis] = useState([]);
    const [widthInPercentage, setWidthInPercentage] = useState("60%");
    const [justifyContent, setJustifyContent] = useState("space-around");
    const [padding, setPadding] = useState("10px");

    useEffect(() => {
        if (visionData && visionData.data) {
            const uniqueEmos = visionData.data
                .map(item => item.emo)
                .filter((value, index, self) => self.indexOf(value) === index); // Remove duplicates
            
            const emojiOptions = uniqueEmos.map(emo => ({
                id: emo,
                symbol: getEmojiSymbol(emo),
                label: emo
            }));
            setEmojis(emojiOptions);
        }else if(visionData === null){
            setWidthInPercentage("60%");
            setPadding("33px");
            setJustifyContent("unset");
            setEmojis([{ id: 'Joyful', symbol: getEmojiSymbol('Joyful'), label: 'Smiling' }]);
            setSelectedEmoji('Joyful');


        }
    }, [visionData]);

    const getEmojiSymbol = (emo) => {
        switch (emo) {
            case 'Surprise':
                return '😀';
            case 'Anger':
                return '😡';
            case 'Sorrow':
                return '😢';
            case 'Joyful':
                return '😂';
            default:
                return '❓';
        }
    };

    const handleEmojiClick = (emojiId) => {
        if (visionData === null) {
            return;
        }
        setShowFaces(true); //it shows the people component
        setSelectedEmoji(emojiId);
        const data = visionData.data.filter(item => {
            return item.emo === emojiId;
        });
        setFilteredData(data);
    };    

    return (
        <div className={styles.emojiContainer} style={{ '--btnWidth': widthInPercentage, '--justifyContent':justifyContent, '--padding':padding }}>
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
