import "./productlayout.css";
import { useState, useEffect } from "react";
import { useFetch } from "../../hooks";

function ProductLayout() {
  const [url, setUrl] = useState("http://localhost:4000/api/products");
  const [category, setCategory] = useState(null);
  const { productData, isLoading, isError } = useFetch(url);

  useEffect(() => {
    if (category) {
      setUrl(`http://localhost:4000/api/products?category=${category}`);
    } else {
      setUrl("http://localhost:4000/api/products");
    }
  }, [category]);

  const handleCategory = (e) => {
    setCategory(e.target.value)
  }

  return (
    <>
      <div class="sort">
        <div class="collection-sort">
          <label>Filter by:</label>
          <select onChange={handleCategory}>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's clothing</option>
          </select>
        </div>
      </div>

      <section className="products">
        {isLoading && <h1>Loading...</h1>}

        {!isLoading && isError && (
          <h1>Some error occured. Please try again.</h1>
        )}

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
    </>
  );
}

export default ProductLayout;
