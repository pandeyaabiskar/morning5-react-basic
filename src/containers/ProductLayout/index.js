import "./productlayout.css";
import { useState, useEffect } from "react";
import axios from "axios";

function ProductLayout() {
  const [productData, setProductData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // Fetch data from server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/api/products");
        setProductData(data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setIsError(true);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="products">
      {isLoading && <h1>Loading...</h1>}

      {!isLoading && isError && <h1>Some error occured. Please try again.</h1>}

      {!isLoading &&
        !isError &&
        productData &&
        productData.map((product) => {
          return (
            <div className="product-card" key={product._id}>
              <a href="/details.html">
                <div className="product-image">
                  <img src={product.image} />
                </div>
                <div className="product-info">
                  <h5>{product.title}</h5>
                  <h6>${product.price}</h6>
                </div>
              </a>
            </div>
          );
        })}
    </section>
  );
}

export default ProductLayout;
