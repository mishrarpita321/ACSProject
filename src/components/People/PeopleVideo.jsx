import styles from './People.module.css';

const PeopleVideo = ({ videoData }) => {
    const smilingData = videoData.data.find(item => item.attributes === 'smiling');
    const arrLen = smilingData.faces ? smilingData.faces.length : 0;

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