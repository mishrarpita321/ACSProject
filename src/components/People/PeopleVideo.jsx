import styles from './People.module.css';

const PeopleVideo = ({ videoData }) => {
    console.log('videoData', videoData);
    const smilingData = (videoData.length != 0 ? (videoData.data.find(item => item.attributes === 'smiling')) : null);
    const arrLen = smilingData?.faces ? smilingData.faces.length : 0;

    return (
        <div className={styles.people}>
            {arrLen ? (
                smilingData.faces.map((face, idx) => (
                    <div key={idx} className={styles.imgcontainer} title={face.confidence}>
                        <img
                            key={face.faceId}
                            src={face.img}
                            alt={`Person ${idx + 1}`}
                            className={styles.image}
                        />
                    </div>
                ))) : (
                <div className={styles.imgcontainer}>
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Person"
                        className={styles.image}
                    />
                </div>
            )}
        </div>
    );
};

export default PeopleVideo;