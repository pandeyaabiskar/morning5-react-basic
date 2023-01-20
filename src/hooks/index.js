import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [productData, setProductData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // Fetch data from server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url);
        setProductData(data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setIsError(true);
      }
    };
    fetchData();
  }, [url]);

  return { productData, isLoading, isError };
};

export { useFetch };
