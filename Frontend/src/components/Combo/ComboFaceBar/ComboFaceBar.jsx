const ComboFaceBar = ({ Feature, percentage, colorCode }) => {
    return (
        <>
            <div className="" style={{margin:"5px 0px 0px 0px"}}>
                <div className="">{capitalizeFirstWord(Feature)} - {percentage}%</div>
                <div style={{ width: '100%', backgroundColor: '#e6e6e6', height: '7px', borderRadius: '5px' }}>
                    <div style={{
                        width: `${percentage}%`,
                        backgroundColor: colorCode,
                        height: '100%',
                        // borderRadius: '5px'
                    }}>
                    </div>
                </div>
            </div>
        </>
    );
}

// Function to capitalize the first word of a string
function capitalizeFirstWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default ComboFaceBar;
