import Bundles from "@/components/Bundles";
import ProductList from "@/components/ProductList";
import Skeleton from "@/components/Skeleton";
import Slider from "@/components/Slider";
import { WixClientContext } from "@/context/wixContext";
import { useWixClient } from "@/hooks/useWixClient";
import { wixClientServer } from "@/lib/wixClientServer";
import { Suspense, useContext, useEffect } from "react";

const HomePage = async () => {

  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl text-semibold">Best Sellers</h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_FEATURED_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>

      <div className="mt-24">
        <h1 className="text-2xl text-semibold px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">The Goods</h1>
        <Suspense fallback={<Skeleton />}>
          <Bundles />
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;
