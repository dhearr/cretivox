import ProductList from "@/components/ProductList";
import { styles } from "@/styles";

const Page = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products?limit=100`
  );

  const products = await res.json();

  return (
    <section className={styles.bgSection}>
      <ProductList api={products} />
    </section>
  );
};

export default Page;
