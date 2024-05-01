import styles from './ShowResponseTime.module.css';
import { BsInfoCircleFill } from "react-icons/bs";

const ShowResponseTime = ({ respTime, fileType }) => {
    let time;
    if (fileType === "video") {
        time = respTime[0].responseTime;
    } else {
        time = respTime.responseTime;
    }
    return (
        <div className={styles.responseTime}>
            <div className={styles.time}>
                <BsInfoCircleFill />
                <div className={styles.text}>Response Time Vision API: {time}</div>
            </div>
            <div className={styles.time}>
                <BsInfoCircleFill />
                <div className={styles.text}>Response Time Data Upload: {time}</div>
            </div>
        </div>
    );
};

export default ShowResponseTime;