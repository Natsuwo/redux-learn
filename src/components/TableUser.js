import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../redux/slices/userSlide";

export default function TableUser() {
  const listUsers = useSelector((state) => state?.user?.listUsers);
  const isLoading = useSelector((state) => state?.user?.isLoading);
  const isError = useSelector((state) => state?.user?.isError);

  const dispatch = useDispatch();

  const handleDelete = (user) => {
    // dispatch(deleteUserRedux(user.id));
  };

  useEffect(() => {
    // fetchAllUser();
    dispatch(fetchAllUsers());
  }, []);

  if (isLoading === true && isError === false) {
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>
        </Table>
        <div>Loading data...</div>
      </>
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
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>
        </Table>
        <div>Something wrong, please try again!!</div>
      </>
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
