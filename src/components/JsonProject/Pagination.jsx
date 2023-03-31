import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayData from "./DisplayData";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setData(res.data);
      setLoading(false);
    };
    fetchPost();
  }, []);

  return (
    <div>
      <DisplayData data={data} loading={loading} />
    </div>
  );
};

export default Pagination;
