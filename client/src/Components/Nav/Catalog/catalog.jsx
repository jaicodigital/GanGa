import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProduct,
  orderByPrice,
  getUser,
  getCategories,
} from "../../Redux/Actions/actions";
import Card from "../../Card/card";
import "./catalog.css";
import FilterPrice from "../Filter/filterPrice";
import Pagination from "../../Home/Pagination/pagination";
import download from "../../Resources/cargando.gif";
import Nav from "../NavBar/nav";
import FooterCatalog from "../../Home/Footer/footerCatalog";
import NewsletterCatalog from "../../Home/NewsLetter/newsletterCatalog";

export default function Catalogo() {
  const dispatch = useDispatch();
  const allProduct = useSelector((state) => state.product);

  const [, setOrden] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage] = useState(18);
  const indexOfLastProducts = currentPage * elementsPerPage;
  const indexOfFirstProducts = indexOfLastProducts - elementsPerPage;
  const currentProducts = allProduct?.slice(
    indexOfFirstProducts,
    indexOfLastProducts
  );

  const Paginate = (pageNumbers) => {
    setCurrentPage(pageNumbers);
  };

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getProduct());
    setCurrentPage(1);
  }

  function handleOrder(e) {
    e.preventDefault();
    dispatch(orderByPrice(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  return (
    <div className="containerCatalog">
      <Nav className="flex justify-between items-center h-20 w-8 text-black" />
      <div className="bannerProd">
      </div>
      <div className="inf">
        <div className="filtros">
          <div className="conNameFil">
            <h1 className="nameFil">FILTROS:</h1>
          </div>
          <div className="inputContainerCatalog">
            <FilterPrice />
          </div>
          <div className="selectFilter">
            <select className="select" onChange={(e) => handleOrder(e)}>
              <option> ordena por precio: </option>
              <option value="Menor-Mayor"> Mayor a Menor </option>
              <option value="Mayor-Menor"> Menor a Mayor </option>
            </select>
          </div>
          <div className="conBor">
            <button className="bor" onClick={handleClick}>
              Borrar Filtros
            </button>
          </div>
        </div>
      </div>
      <div className="containerCards">
        {currentProducts?.length === 0 ? (
          <div className="download">
            <img src={download} alt="" />
          </div>
        ) : (
          currentProducts.map((el, i) => {
            return (
              <div className="cardProducts" key={"card" + i}>
                <Card
                  name={el.name}
                  image={el.image}
                  price={el.price}
                  id={el.id}
                />
              </div>
            );
          })
        )}
      </div>
      <Pagination
        elementsPerPage={elementsPerPage}
        allProduct={allProduct}
        paginate={Paginate}
      />  
      <NewsletterCatalog />
      <FooterCatalog />
    </div>
  );
}
