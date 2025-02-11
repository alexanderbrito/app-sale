import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "../../home/Products/Product";
import { paginationItems } from "../../../constants";
import api from "../../../api/api";

function Items({ currentItems }) {
  //Renderiza os itens de imagens
  return (
    <>
      {currentItems &&
        currentItems.map((product) => (
          <div key={product._id} className="w-full">
            {
              <Product
                key={product.id}
                _id={product.id}
                img={product.image_url}
                productName={product.name}
                price={product.price_in_cents}
                //color={product.description}
                badge={true}
              />
            }
          </div>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage }) => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [itemStart, setItemStart] = useState(1);

  const [allProducts, setAllProducts] = React.useState([]);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  //   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = allProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(allProducts.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allProducts.length;
    setItemOffset(newOffset);
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset},`
    // );
    setItemStart(newOffset);
  };




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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
        <Items allProducts={allProducts} currentItems={currentItems} />
      </div>
      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
        <ReactPaginate
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel=""
          pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
          pageClassName="mr-6"
          containerClassName="flex text-base font-semibold font-titleFont py-10"
          activeClassName="bg-black text-white"
        />

        <p className="text-base font-normal text-lightText">
          Produtos de {itemStart === 0 ? 1 : itemStart} to {endOffset} of{" "}
          {allProducts.length}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
