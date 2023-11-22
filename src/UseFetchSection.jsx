import React from "react";
import axios from "axios";
import { useEffect } from "react";
import useFetch from "../hook/useFetch";

// function getUsers(url) {
//   useEffect(() => {
//     axios.get(url).then((res) => {
//       console.log(res.data);
//     });
//   });
// }
// function deleteUser() {
//   useEffect(() => {
//     axios
//       .delete("https://northwind.vercel.app/api/suppliers/" + 5)
//       .then((res) => {
//         console.log(res.data);
//       });
//   });
// }

// function putUser(obj) {
//   useEffect(() => {
//     axios
//       .put("https://northwind.vercel.app/api/suppliers/" + 5, obj)
//       .then((res) => {
//         console.log(res.data);
//       });
//   });
// }

// function pushUser(obj) {
//   useEffect(() => {
//     axios
//       .put("https://northwind.vercel.app/api/suppliers/", obj)
//       .then((res) => {
//         console.log(res.data);
//       });
//   });
// }

const UseFetch = () => {
  let { data, loading, error } = useFetch(
    "get",
    "https://northwind.vercel.app/api/suppliers/"
  );

  return (
    <>
      Users are:
      {data && (
        <ul>
          {data.map((item, i) => {
            return <li key={i}>{item.companyName}</li>;
          })}
        </ul>
      )}
      {loading && <h3>loading...</h3>}
      <br />
      {error && <h3>error</h3>}
    </>
  );
};

export default UseFetch;
