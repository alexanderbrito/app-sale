import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/orebiSlice";

const Payment = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetCart())
  }, [])
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Compra realizada com sucesso!" />
      <div className="pb-10 text-large font-semibold">
       
        <Link to="/">
          <button className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300">
            Compre Mais
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;
