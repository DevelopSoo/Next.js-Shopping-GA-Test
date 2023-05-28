import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Modal from "@/components/Modal";
import { useState } from "react";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const onClickModal = (id) => {
    setSelectedId(id);
    setOpenModal(true);
  };
  return (
    <>
      <Head>
        <title>Shop For GA Test</title>
        <meta
          name="description"
          content="Shopping website for nextjs ga test"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <h1 className={styles.title}>
            Shopping Mall Next.js And GA & GTM Test
          </h1>
          <p className={styles.description}>🔥 Hottest Items in the world 🔥</p>
        </section>
        <section className={styles.container}>
          <div className={styles.item}>
            <img src="/images/jacket.jpg" className={styles.itemImg} />
            <div className={styles.itemText}>
              <span className={styles.name}>Jacket</span>
              <p className={styles.price}>$18</p>
              <button
                onClick={() => onClickModal("jacket")}
                className={styles.cartBtn}
              >
                Add To Cart
              </button>
            </div>
          </div>
          <div className={styles.item}>
            <img src="/images/neat.jpg" className={styles.itemImg} />
            <div className={styles.itemText}>
              <span className={styles.name}>Neat</span>
              <p className={styles.price}>$12</p>
              <button
                onClick={() => onClickModal("neat")}
                className={styles.cartBtn}
              >
                Add To Cart
              </button>
            </div>
          </div>
          <div className={styles.item}>
            <img src="/images/set.jpg" className={styles.itemImg} />
            <div className={styles.itemText}>
              <span className={styles.name}>Perfect Set</span>
              <p className={styles.price}>$32</p>
              <button
                onClick={() => onClickModal("set")}
                className={styles.cartBtn}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </section>
        {openModal && <Modal setOpenModal={setOpenModal} id={selectedId} />}
      </main>
    </>
  );
}
