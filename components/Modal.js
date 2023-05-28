import React, { useState } from "react";
import styles from "./Modal.module.css";

export default function Modal({ setOpenModal, id }) {
  const [number, setNumber] = useState(1);
  const onIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const onDecrease = () => {
    setNumber((prevNumber) => {
      if (prevNumber <= 0) {
        return prevNumber;
      }
      return prevNumber - 1;
    });
  };

  return (
    <div className={styles.modalContent}>
      <div className={styles.modalHeader}>
        <span>Cart To Pay</span>
        <button className={styles.closeBtn} onClick={() => setOpenModal(false)}>
          X
        </button>
      </div>
      <div className={styles.item}>
        <img src={`/images/${id}.jpg`} className={styles.itemImg} />
        <div className={styles.itemText}>
          <span className={styles.name}>Perfect Set</span>
          <p className={styles.price}>$32</p>
          <div className={styles.countBtns}>
            <button className={styles.countBtn} onClick={onDecrease}>
              -
            </button>
            <span className={styles.countNumber}>{number}</span>
            <button className={styles.countBtn} onClick={onIncrease}>
              +
            </button>
          </div>
          <button
            onClick={() => alert("계산 완료!!")}
            className={styles.payBtn}
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  );
}
