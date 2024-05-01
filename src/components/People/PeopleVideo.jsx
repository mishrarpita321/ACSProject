import styles from './People.module.css';

const PeopleVideo = ({ videoData }) => {
    const arrLen = videoData[0].data.faces ? videoData[0].data.faces.length : 0;

    return (
        <div className={styles.people}>
            {arrLen ? (
                videoData[0].data.faces.map((face, idx) => (
                    <div key={idx} className={styles.imgcontainer}>
                        <img
                            key={face.id}
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