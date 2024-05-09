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
            console.log('visionData',visionData.data);
            // const uniqueEmos = visionData.data
            //     .map(item => item.emotion)
            //     .filter((value, index, self) => self.indexOf(value) === index); // Remove duplicates

            // const uniqueEmos = Object.keys(visionData.data) 
            //     console.log('uniqueEmos',uniqueEmos);

            const uniqueEmos = ['joyful', 'surprise', 'angry', 'sad','default']
            
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
            setEmojis([{ id: 'joyful', symbol: getEmojiSymbol('joyful'), label: 'Smiling' }]);
            setSelectedEmoji('joyful');


        }
    }, [visionData]);

    const getEmojiSymbol = (emo) => {
        switch (emo) {
            case 'surprise':
                return '😀';
            case 'angry':
                return '😡';
            case 'sad':
                return '😢';
            case 'joyful':
                return '😂';
            default:
                return '❓';
        }
    };

    // const handleEmojiClick = (emojiId) => {
    //     if (visionData === null) {
    //         return;
    //     }
    //     setShowFaces(true); //it shows the people component
    //     setSelectedEmoji(emojiId);
    //     console.log('visionDataHandelFilter',visionData.data);
    //     const data = visionData.data.filter(item => {
    //         return item.emo === emojiId;
    //     });
    //     setFilteredData(data);
    // };    


    const handleEmojiClick = (emojiId) => {
        if (!visionData) {
            return; // Check if the visionData is not present and exit the function if true
        }
    
        setShowFaces(true); // Show the People component
        setSelectedEmoji(emojiId); // Set the selected emoji to the clicked one
        console.log('visionDataHandleFilter', visionData.data['sad']);
    
        // Since visionData is an object where each key is an emotion and values are arrays of data:
        const filteredData = visionData.data[emojiId] || []; // Access the array by key or return an empty array if the key doesn't exist
    
        setFilteredData(filteredData);
        console.log('filteredData', filteredData);
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
                    <div className={styles.label}>{capitalizeFirstWord(emoji.label)}</div>
                </div>
            ))}
        </div>
    );
};

export default EmojiPicker;


// Function to capitalize the first word of a string
function capitalizeFirstWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}