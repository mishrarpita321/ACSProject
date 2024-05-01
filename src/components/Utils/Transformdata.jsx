function transformApiResponse(response) {
    const transformed = {
        responseTime: response.timeTaken,
        data: []
    };

    // Iterate over the response object except for the timeTaken property
    for (const [emotion, images] of Object.entries(response)) {
        if (emotion !== 'timeTaken') {
            // Capitalize the first letter of the emotion key and adjust to match desired output
            const emotionLabel = emotion.charAt(0).toUpperCase() + emotion.slice(1);

            // Collect images in the specified format
            const faces = images.map((img,i) => ({
                faceid: i+1, // Placeholder value; replace or generate as needed
                img: img
            }));

            // Push the emotion and its faces to the data array
            transformed.data.push({
                emo: emotionLabel,
                faces: faces
            });
        }
    }

    return transformed;
}

export default transformApiResponse;
