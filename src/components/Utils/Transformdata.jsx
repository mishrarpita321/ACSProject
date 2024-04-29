// WORK IN PROGRESS

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

// Example usage:
// const apiResponse = {
//     "timeTaken": "2sec",
//     "joyful": [
//         "https://res.cloudinary.com/demo/image/upload/c_thumb,g_face,h_200,w_200/r_max/f_auto/woman-blackdress-stairs.png"
//     ],
//     "anger": [
//         "https://res.cloudinary.com/demo/image/upload/leather_bag_gray.jpg"
//     ],
//     "sorrow": [
//         "https://res.cloudinary.com/demo/image/upload/ar_1.0,c_thumb,g_face,w_0.7/r_max/co_skyblue,e_outline/co_lightgray,e_shadow,x_5,y_8/docs/blue_sweater_model.png"
//     ],
//     "surprise": [
//         "https://res.cloudinary.com/demo/image/upload/water-park-aerial-view.jpg",
//         "https://res.cloudinary.com/demo/image/upload/v1699883548/water-park-aerial-view.jpg"
//     ]
// };

// console.log(transformApiResponse(apiResponse));

export default transformApiResponse;
