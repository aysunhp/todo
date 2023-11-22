import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(method, url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  if (method == "get") {
    useEffect(() => {
      axios
        .get(url)
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [url]);
  }

  return {
    data,
    loading,
    error,
  };
}
