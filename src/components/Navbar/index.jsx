import React from "react";
import Link from "next/link";
import { styles } from "./styles";

const index = () => {
  return (
    <div className={styles.containNavbar}>
      <Link href="/" className={styles.logo}>
        Cretivox
      </Link>
    </div>
  );
};

export default index;
