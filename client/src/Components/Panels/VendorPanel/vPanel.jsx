import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Nav from "../../Nav/NavBar/nav";
import VendedorSidebar from "./vSidebar";
import InfoUser from "../UserPanel/infoUser";
import s from "./vendor.module.css";
import { getAllOrders, getAllUsers, getProduct } from "../../Redux/Actions/actions";
import VendorProductList from "./vProductList";
import VendorSalesList from "./vSalesList";
import PurchaseList from "./vPurchaseList";


export default function VendorPanel({ user }) {

  const dispatch = useDispatch();

  const [productos, verProductos] = useState(false);
  const [ventas, verVentas] = useState(false);
  const [compras, verCompras] = useState(false);
  const orders = useSelector((state) => state.orders);
  const products = useSelector((state) => state.product);
  const allUsers = useSelector((state) => state.allUsers);
  const userOrders = orders.filter(o => o.userId === user.id);


  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  console.log("orders", orders);

  return (
    <div className="bg-gray-100">
      <Nav />
      {!ventas ? (
        <div>
          {!productos ? (
            <div>
              {!compras ? (
                <div className={s.container}>
                  <div>
                    <VendedorSidebar
                      productos={productos}
                      verProductos={verProductos}
                      ventas={ventas}
                      verVentas={verVentas}
                      compras={compras}
                      verCompras={verCompras}
                    />
                  </div>
                  <div className={s.body}>
                    <InfoUser />
                  </div>
                </div>
              ) : (
                <div className={s.container}>
                  <div>
                    <VendedorSidebar
                      productos={productos}
                      verProductos={verProductos}
                      ventas={ventas}
                      verVentas={verVentas}
                      compras={compras}
                      verCompras={verCompras}
                    />
                  </div>
                  <div className={s.body}>
                    <PurchaseList orders={userOrders} />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className={s.container}>
              <div>
                <VendedorSidebar
                  productos={productos}
                  verProductos={verProductos}
                  ventas={ventas}
                  verVentas={verVentas}
                  compras={compras}
                  verCompras={verCompras}
                />
              </div>
              <div className={s.body}>
                <VendorProductList products={products} user={user}  />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className={s.container}>
          <div>
            <VendedorSidebar
              productos={productos}
              verProductos={verProductos}
              ventas={ventas}
              verVentas={verVentas}
              compras={compras}
              verCompras={verCompras}
            />
          </div>
          <div className={s.body}>
            <VendorSalesList orders={orders} user={user} users={allUsers}/>
          </div>
        </div>
      )}
    </div>
  );
}
