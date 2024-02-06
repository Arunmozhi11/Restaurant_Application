import React from "react";
import { DataTable } from "../components";
import { HiCurrencyRupee } from "../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteAProducts, getAllProducts } from "../api";
import { setAllProducts } from "../context/actions/productActions";
import { alertNULL, alertSuccess } from "../context/actions/alertActions";

const DBItems = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  return (
    <div className="flex item-center justify-self-center gap-4 pt-6 w-full">
      <DataTable
        colums={[
          {
            title: "Image",
            field: "imageURL",
            render: (rowData) => (
              <img
                src={rowData.imageURL}
                className="w-32 h-16 object-contain rounded-md"
              />
            ),
          },
          {
            title: "Name",
            field: "product_name",
          },
          {
            title: "Category",
            field: "product_category",
          },
          {
            title: "Price",
            field: "product_price",
            render: (rowData) => (
              <p className="text-2xl font-semibold text-textColor flex items-center justify-center">
                <HiCurrencyRupee className="text-red-400" />
                {parseFloat(rowData.product_price).toFixed(2)}
              </p>
            ),
          },
        ]}
        data={products}
        title="List of Products"
        actions={[
          {
            icon : "edit",
            tooltip : "Edit data",
            onClick: (event, rowData) => {
              alert("You want to edit "+ rowData.productID)
            }
          },
          {
            icon : "delete",
            tooltip : "Delete data",
            onClick: (event, rowData) => {
              if( window.confirm(
                "Are you sure, You want to perform this action"
                )){

                }{
                  deleteAProducts(rowData.productID).then((res) => {
                    dispatch(alertSuccess("Product Deleted"));
                    setInterval(() => {
                      dispatch(alertNULL())
                    }, 3000)
                    getAllProducts().then((data) => {
                      dispatch(setAllProducts(data));
                    });
                  })
                }
              
            }
          }
        ]}
      />
    </div>
  );
};

export default DBItems;
