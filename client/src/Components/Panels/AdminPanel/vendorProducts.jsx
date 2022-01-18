import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../Redux/Actions/actions";
import { TiDeleteOutline } from "react-icons/ti";

import { deleteProduct } from "../../Redux/Actions/actions";

import s from "../AdminPanel/admin.module.css";

export default function VendorProducts({ id }) {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product);
  const vendorProducts = products.filter((p) => p.owner === id);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  console.log("vp", vendorProducts);

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "Nombre", headerName: "Nombre", width: 200 },
    { field: "Precio", headerName: "Precio", type: "number", width: 100 },
    { field: "Categoria", headerName: "Categoria", width: 200 },
    { field: "Subcategoria", headerName: "Subcategoria", width: 200 },
    { field: "Marca", headerName: "Marca", width: 200 },
    { field: "Stock", headerName: "Stock", type: "number", width: 70 },
    {
      field: "action",
      headerName: "Acción",
      width: 150,
      renderCell: (params) => {
        const id = params.row.id;
        return (
          <>
            <Link to={"/product/" + id}>
              <button className={s.editar}> edit </button>
            </Link>
            <button onClick={() => handleDelete(id)}>
              {" "}
              <TiDeleteOutline className={s.delete} />{" "}
            </button>
          </>
        );
      },
    },
  ];

  function handleDelete(id) {
    dispatch(deleteProduct(id));
    setRows(rows.filter((i) => i.id !== id));
    window.location.reload();
  }

  let Rows = vendorProducts?.map((p) => {
    return {
      id: p.id,
      Nombre: p.name,
      Precio: "$ " + p.price,
      Categoria: p.categories,
      Stock: p.stock,
    };
  });

  const [rows, setRows] = useState(Rows);
  return (
    <div className={s.listaProductos}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}
