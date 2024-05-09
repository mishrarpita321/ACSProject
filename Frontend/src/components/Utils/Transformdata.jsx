function transformApiResponse(response) {
    // Create a transformed object with responseTime and an empty data object
    const transformed = {
        apiTimeTaken: response.apiTimeTaken,
        storageTimeTaken: response.storageTimeTaken,
        data: []
    };

    // Group the face data by emotion
    const groupedData = response.faces.reduce((acc, face) => {
        const { emotion } = face;
        if (!acc[emotion]) {
            acc[emotion] = []; // Initialize an empty array if the key doesn't exist
        }
        acc[emotion].push(face); // Push the face data to the corresponding group
        return acc;
    }, []);

    // Set the grouped data directly to the data property
    transformed.data = groupedData;

    console.log('transformed', transformed);
    return transformed;
}

export default transformApiResponse;
