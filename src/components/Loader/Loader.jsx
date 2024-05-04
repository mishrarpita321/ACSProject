import styles from './Loader.module.css';

const Loader = ({ isVisible = true }) => {
    return (
        isVisible && <div className={styles.loader}></div>
    )
}

export default Loader;