import React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function VendorSalesList({ user, orders, users }) {
  console.log("user", user);
  for (var i = 0; i < orders.length; i++) {
    for (var j = 0; j < orders[i].productInfo.length; j++) {
      orders[i].productInfo[j].date = orders[i].createdAt.slice(0, 10);
      orders[i].productInfo[j].total =
        orders[i].productInfo[j].quantity * orders[i].productInfo[j].price;
    }
  }

  let sales = orders.map((o) => o.productInfo).flat();
  sales = sales.filter((s) => s.owner === user.id);

  console.log("sales", sales);
  console.log("users", users)

  const columns = [
    { field: "id", headerName: "id", width: 30 },
    { field: "Usuario", headerName: "Usuario", width: 130 },
    { field: "Correo", headerName: "Correo", width: 150 },
    { field: "Producto", headerName: "Producto", width: 180 },
    { field: "Cantidad", headerName: "Cantidad", type: "number", width: 90 },
    { field: "Total", headerName: "Total", type: "number", width: 100 },
    { field: "Fecha", headerName: "Fecha",  width: 100 },
  ];

  const rows = sales?.map((s) => {
      let User = users.filter(u => u.id === s.userId);
     s.user = User[0].name + " " + User[0].surname
     s.mail = User[0].mail
    return {
      Usuario: s.user,
      Correo: s.mail,
      Producto: s.name,
      Cantidad: s.quantity,
      Total: "$ " + s.total,
      Fecha: s.date,
      id: s.id,
    };
  });

  return (
    <div>
      <h4 className="text-5xl text-center font-light pt-10 pb-12">Ventas</h4>
      <div className="">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
