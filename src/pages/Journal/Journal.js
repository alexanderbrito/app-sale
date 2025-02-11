import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Diário" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">ALX</span>{" "}
          Semana Especial na Essência & Estilo

Novos produtos exclusivos chegaram para renovar seu estilo e sua casa. Aproveite promoções especiais em itens selecionados e ganhe brindes em compras acima de R$150. No sábado, participe do nosso evento ao vivo com dicas de moda, decoração e um sorteio de prêmios. Não perca!
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue comprando
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Journal;
