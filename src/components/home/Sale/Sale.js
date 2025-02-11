import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  saleImgOne,
  saleImgTwo,
  saleImgThree,
} from "../../../assets/images/index";
import Image from "../../designLayouts/Image";
import api from "../../../api/api";


const Sale = () => {


  const [allProducts, setAllProducts] = React.useState([]);


  const findProductList = async () => {
    const response = await api.post(
      "",
      {
        query: `
           {
            allProducts{
              id
              name
              description
              image_url
              category
            }
          }
          `
      }
    );
    console.log("DATA", response.data)

    const {data} = response.data;

    setAllProducts(data.allProducts)

  }

  useEffect(() => {

    findProductList().then(() => {console.log("allProducts", allProducts)});

    
  }, [])

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div className="col-span-2 md:col-span-2">
        <Link to="/shop">
          <Image className="h-full" imgSrc={allProducts[0]?.image_url} />
        </Link>
      </div>
      <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
        <div className="h-full">
          <Link to="/shop">
            <Image
              className="h-full"
              imgSrc={allProducts[1]?.image_url}
            />
          </Link>
        </div>
        <div className="h-full">
          <Link to="/shop">
            <Image
              className="h-full"
              imgSrc={allProducts[3]?.image_url}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
