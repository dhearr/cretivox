import { getProductResponse } from "@/app/libs/api-libs";
import { styles } from "./styles";

const Page = async ({ params: { id } }) => {
  const product = await getProductResponse(`products/${id}`);

  return (
    <>
      <section className={styles.containDetail}>
        <div className={styles.warpDetail}>
          <div className={styles.cardDetail}>
            <img
              alt={product.title}
              className={styles.imgHeroDetail}
              src={product.thumbnail}
            />
            <div className={styles.containListDetail}>
              <h2 className={styles.textBrand}>{product.brand}</h2>
              <h1 className={styles.textTitle}>{product.title}</h1>
              <div className={styles.warpRatingDiscount}>
                <span className={styles.lineRatingDiscount}>
                  <span
                    className={styles.textRating}
                  >{`${product.rating} Rewiews`}</span>
                </span>
                <span className={styles.textDiscount}>
                  {`Discount ${product.discountPercentage}%`}
                </span>
              </div>
              <h3 className={styles.titleDescription}>Description :</h3>
              <p className={styles.textDescription}>{product.description}</p>
              <div className={styles.warpCategoryStock}>
                <span className={styles.lineCategoryStock}>
                  <span
                    className={styles.textCategory}
                  >{`${product.category}`}</span>
                </span>
                <span className={styles.textStock}>
                  {`stock : ${product.stock}`}
                </span>
              </div>
              <div className={styles.containCarousel}>
                {product.images.map((data, index) => (
                  <div
                    key={`product-data-${index}`}
                    className={styles.warpCarousel}
                  >
                    <img
                      src={data}
                      alt={product.title}
                      className={styles.imgChildDetail}
                    />
                  </div>
                ))}
              </div>
              <div className={styles.warpPriceBuy}>
                <span className={styles.textPrice}>{`$ ${product.price}`}</span>
                <button className={styles.buttonBuy}>Buy</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
