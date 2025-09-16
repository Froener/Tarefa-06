import React from "react";
import styles from "./Skeleton.module.css";

const SkeletonCard = () => (
  <div className={styles.card}>
    <div className={styles.imagePlaceholder}></div>
    <div className={styles.content}>
      <div className={styles.textBlock}>
        <div className={styles.textLine}></div>
        <div className={styles.textLineShort}></div>
      </div>
      <div className={styles.row}>
        <div className={styles.box}></div>
        <div className={styles.boxSmall}></div>
      </div>
      <div className={styles.buttonPlaceholder}></div>
    </div>
  </div>
);

export default SkeletonCard;
