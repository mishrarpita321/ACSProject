function transformCombinedApiResponse(response) {
    // Array to hold the transformed data categories
    const data = [];

    // Iterate over each key in the response object to handle different sentiments
    Object.keys(response).forEach(sentiment => {
        const faces = response[sentiment].map(face => {
            // Convert attributes to the desired 'features' format
            const features = face.attributes.map(attr => ({
                feature: attr.name.replace(/_/g, ' '), // Replacing underscores with spaces
                percentage: (attr.confidence * 100).toFixed(0) // Convert to percentage and round
            }));

            return {
                id: face.id,
                image: face.img,
                time: face.timestamp,
                features: features
            };
        });

        // Push the formatted data for this sentiment
        data.push({
            sentiment: mapSentiment(sentiment), // Map the sentiment to your desired labels if necessary
            faces: faces
        });
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
    return mapping[apiSentiment] || apiSentiment;
}


export default transformCombinedApiResponse;