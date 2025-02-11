import React, { useEffect } from "react";
import { SplOfferData } from "../../../constants";
import api from "../../../api/api";

const ProductsOnSale = () => {

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
  }, [])

  return (
    <div>
      <h3 className="font-titleFont text-xl font-semibold mb-6 underline underline-offset-4 decoration-[1px]">
        Produtos em oferta
      </h3>
      <div className="flex flex-col gap-2">
        {allProducts.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border-b-[1px] border-b-gray-300 py-2"
          >
            <div>
              <img className="w-24" src={item.image_url} alt={item.image_url} />
            </div>
            <div className="flex flex-col gap-2 font-titleFont">
              <p className="text-base font-medium">{item.name}</p>
              <p className="text-sm font-semibold">${item.price_in_cents}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsOnSale;
