import { styles } from "@/styles";
import Link from "next/link";
import React from "react";

const Page = ({ api }) => {
  return (
    <div className={styles.containProduct}>
      {api.products?.map((data) => (
        <div key={data.id} className={styles.cardProduct}>
          <figure>
            <img
              src={data.thumbnail}
              alt={data.brand}
              className={styles.imgProduct}
            />
          </figure>
          <div className={styles.warpTitle}>
            <h1 className={styles.textTitleProduct}>{data.title}</h1>
            <div className={styles.warpPriceStock}>
              <p className={styles.textPriceProduct}>{`$ ${data.price}`}</p>
              <p
                className={styles.textStockProduct}
              >{`stock: ${data.stock}`}</p>
            </div>
            <div className={styles.containProductButton}>
              <Link
                href={`/detail/${data.id}`}
                className={styles.warpProductButton}
              >
                <button className={styles.buttonDetailProduct}>
                  Detail Product
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
