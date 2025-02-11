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
            allProducts {
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
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      <div className="w-full md:w-2/3 lg:w-1/2 h-full">
        <Link to="/shop">
          <Image className="h-full w-full object-cover" imgSrc={allProducts[0]?.image_url} />
        </Link>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <Image className="h-full w-full object-cover" imgSrc={allProducts[1]?.image_url} />
          </Link>
        </div>
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <Image
              className="h-full w-full object-cover"
              imgSrc={allProducts[3]?.image_url}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
