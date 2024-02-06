import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DataTable from './DataTable';
import { Avatar } from '../assets';
import { getAllUsers } from "../api";
import { setAllUserDetails } from "../context/actions/allUsersAction"

const DBUsers = () => {
  const allUsers = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!allUsers) {
      getAllUsers().then((data) => {
        dispatch(setAllUserDetails(data));
      });
    } 
  }, []);
  
  return (
    <div className="flex item-center justify-self-center gap-4 pt-6 w-full">
    <DataTable
      colums={[
        {
          title: "Image",
          field: "photoURL",
          render: (rowData) => (
            <img
              src={rowData.photoURL ? rowData.photoURL : Avatar}
              className="w-32 h-16 object-contain rounded-md"
            />
          ),
        },
        {
          title: "Name",
          field: "displayName",
        },
        {
          title: "Email",
          field: "email",
        },
        {
          title: "Verified",
          field: "emailVerified",
          render: (rowData) => (
            <p className={`px-2 py-1 w-32 text-center text-primary rounded-md ${
              rowData.emailVerified ? "bg-emerald-500" : "bg-red-500"
            }`}>
            {rowData.emailVerified ? "Verified" : "Not Verified"}
            </p>
          )
        },

      ]}
      data={allUsers}
      title="List of Users"
      // actions={[
      //   {
      //     icon : "edit",
      //     tooltip : "Edit data",
      //     onClick: (event, rowData) => {
      //       alert("You want to edit "+ rowData.productID)
      //     }
      //   },
      //   {
      //     icon : "delete",
      //     tooltip : "Delete data",
      //     onClick: (event, rowData) => {
      //       if( window.confirm(
      //         "Are you sure, You want to perform this action"
      //         )){

      //         }{
      //           deleteAProducts(rowData.productID).then((res) => {
      //             dispatch(alertSuccess("Product Deleted"));
      //             setInterval(() => {
      //               dispatch(alertNULL())
      //             }, 3000)
      //             getAllProducts().then((data) => {
      //               dispatch(setAllProducts(data));
      //             });
      //           })
      //         }
            
      //     }
      //   }
      // ]}
    />
  </div>
  )
}

export default DBUsers;