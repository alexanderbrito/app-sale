import React, { useEffect } from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";
import api from "../../../api/api";

const BestSellers = () => {


  const [allProducts, setAllProducts] = React.useState([]);


  const findProductList = async () => {
    const response = await api.post(
      "",
      {
        query: `
                 {
                  allProducts {
                    id
                    name
                    description
                    image_url
                    category
                    price_in_cents
                  }
                }
                `
      }
    );
    console.log("DATA", response.data)

    const { data } = response.data;

    setAllProducts(data.allProducts)

  }


  useEffect(() => {
    findProductList().then(() => { console.log("allProducts", allProducts) });
  }, [allProducts])
  return (
    <div className="w-full pb-20">
      <Heading heading="Nossos Mais Vendidos" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        {allProducts?.map((product) => {
          
        })}
      </div>
    </div>
  );
};

export default BestSellers;
