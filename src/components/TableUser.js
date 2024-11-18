import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUser } from "../action/actions";

export default function TableUser() {
  const listUsers = useSelector((state) => state?.user?.listUsers);
  const isLoading = useSelector((state) => state?.user?.isLoading);
  const isError = useSelector((state) => state?.user?.isError);

  const dispatch = useDispatch();

  const handleDelete = (item) => {
    console.log(item);
  };

  useEffect(() => {
    // fetchAllUser();
    dispatch(fetchAllUser());
  }, []);

  if (isLoading === true && isError === false) {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <div>Loading data...</div>
        </tbody>
      </Table>
    );
  }

  if (isLoading === false && isError === false) {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listUsers.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.email}</td>
              <td>{item.username}</td>
              <td>
                <Button onClick={() => handleDelete(item)} variant="danger">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  if (isLoading === false && isError === true) {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <div>Something wrong, please try again!!</div>
        </tbody>
      </Table>
    );
  }

  // return (
  //   <Table striped bordered hover>
  //     <thead>
  //       <tr>
  //         <th>#</th>
  //         <th>Email</th>
  //         <th>Username</th>
  //         <th>Actions</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {isError === true ? (
  //         <>
  //           <div>Something wrong, please try again!!</div>
  //         </>
  //       ) : (
  //         <>
  //           {isLoading === true ? (
  //             <>Loading data...</>
  //           ) : (
  //             <>
  //               {listUsers.map((item, index) => (
  //                 <tr key={index}>
  //                   <td>{index + 1}</td>
  //                   <td>{item.email}</td>
  //                   <td>{item.username}</td>
  //                   <td>
  //                     <Button
  //                       onClick={() => handleDelete(item)}
  //                       variant="danger"
  //                     >
  //                       Delete
  //                     </Button>
  //                   </td>
  //                 </tr>
  //               ))}
  //             </>
  //           )}
  //         </>
  //       )}
  //     </tbody>
  //   </Table>
  // );

  return <></>;
}
