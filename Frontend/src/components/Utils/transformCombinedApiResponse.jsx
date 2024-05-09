function transformCombinedApiResponse(response) {
    // Define the desired order of attributes
    const attributeOrder = [
        "eyes_visible",
        "looking_at_camera",
        "glasses",
        "headwear",
        "mouth_open",
        "smiling"
    ];
    const sentimentOrder = {
        "happy": 1,
        "surprised": 2,
        "sad": 3,
        "neutral": 4
    };
    // Helper function to sort attributes according to the defined order
    const sortAttributes = (attributes) => {
        return attributes.sort((a, b) => {
            return attributeOrder.indexOf(a.name) - attributeOrder.indexOf(b.name);
        });
    };
    // Array to hold the transformed data categories, initially unsorted
    const unsortedData = [];

    // Iterate over each key in the response object to handle different sentiments
    Object.keys(response).forEach(sentiment => {
        const faces = response[sentiment].map(face => {
            // Convert attributes to the desired 'features' format
            const features = sortAttributes(face.attributes).map(attr => ({
                feature: attr.name.replace(/_/g, ' '), // Replacing underscores with spaces
                percentage: (attr.confidence * 100).toFixed(0) // Convert to percentage and round
            }));

            return {
                id: face.id,
                image: face.img,
                time: face.timestamp,
                features: features,
                visionConfid: (face.visionConfid * 100).toFixed(0)
            };
        });

        // Push the formatted data for this sentiment
        unsortedData.push({
            sentiment: mapSentiment(sentiment), // Map the sentiment to your desired labels if necessary
            faces: faces
        });

        
    });

        // Sort the data based on sentiment order
        const data = unsortedData.sort((a, b) => {
            console.log(`Sorting: ${a.sentiment} (${sentimentOrder[a.sentiment]}) with ${b.sentiment} (${sentimentOrder[b.sentiment]})`);
            return (sentimentOrder[a.sentiment] || 5) - (sentimentOrder[b.sentiment] || 5);
        });

    return { data };
}

// Helper function to map API sentiment to custom labels
function mapSentiment(apiSentiment) {
    const mapping = {
        "cannot-detect": "neutral", // Example of renaming sentiments
        "sad": "sad",
        "joyful": "happy",
        "surprise": "surprised"
        // Add other mappings as necessary
    };
    const result = mapping[apiSentiment.toLowerCase()] || apiSentiment;  // Lowercase to ensure case-insensitivity
    console.log(`Mapping ${apiSentiment} to ${result}`);
    return result;
}


export default transformCombinedApiResponse;