import React, { useEffect, useState } from "react";
import axios from "axios";

const useAPIFeed = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
    return () => {}; // cleanup function
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return data;
};

export default useAPIFeed;
