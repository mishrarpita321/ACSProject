import styles from './ShowResponseTime.module.css';
import { BsInfoCircleFill } from "react-icons/bs";

const ShowResponseTime = ({ data }) => {
    console.log('data', data);
    return (
        <div className={styles.responseTime}>
            <div className={styles.time}>
                <BsInfoCircleFill />
                <div className={styles.text}>Response Time Vision API: {data.apiTimeTaken} sec</div>
            </div>
            <div className={styles.time}>
                <BsInfoCircleFill />
                <div className={styles.text}>Response Time Data Upload: {data.storageTimeTaken} sec</div>
            </div>
        </div>
    );
};

export default ShowResponseTime;