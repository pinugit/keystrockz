import styles from "./BgAnimatoinBlob.module.css";

export default function BgAnimationBlobs() {
  return (
    <div className={styles.BlobContainer}>
      <div className={styles.twoBlobContainer}>
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
      </div>
      <div className={styles.blob3}></div>
    </div>
  );
}
