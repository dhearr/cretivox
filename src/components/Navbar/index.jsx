import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <div className="navbar bg-black sticky top-0 z-[9999]">
      <Link href="/" className="btn btn-ghost text-xl text-white">
        Cretivox
      </Link>
    </div>
  );
};

export default index;
