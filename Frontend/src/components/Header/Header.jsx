import styles from './Header.module.css';
import { FaHome } from "react-icons/fa";

const Header = ({title}) => {
    const handleHomeOnClick = () => {
        window.location.href = '/';
    };
    return (
        <>
            <div className={styles.appBar}>
                {/* <FaHome className={styles.homeIcon} /> */}
                <span className={styles.homeIcon} onClick={handleHomeOnClick}>
                    <FaHome />
                </span>
                <h1 className={styles.appBarTitle}>{title}</h1>
            </div>
        </>
    );
};

export default Header;