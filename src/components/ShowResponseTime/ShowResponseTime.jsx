import styles from './ShowResponseTime.module.css';
import { BsInfoCircleFill } from "react-icons/bs";

const ShowResponseTime = ({ respTime }) => {
    return (
        <div className={styles.responseTime}>
            <div className={styles.time}>
                <BsInfoCircleFill />
                <div className={styles.text}>Response Time Vision API: {respTime.responseTime}</div>
            </div>
            <div className={styles.time}>
                <BsInfoCircleFill />
                <div className={styles.text}>Response Time Data Upload: {respTime.responseTime}</div>
            </div>
        </div>
    );
};

export default ShowResponseTime;