import "./productlayout.css";
import { useState, useEffect } from "react";
import { useFetch } from "../../hooks";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllData } from "../../store/slices/productSlice";
//Context
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

function ProductLayout() {
  // const [url, setUrl] = useState(process.env.REACT_APP_BASE_URL);
  const [category, setCategory] = useState(null);
  // const { productData, isLoading, isError } = useFetch(url);

  //Redux
  // const dispatch = useDispatch();
  // const { productData, isLoading, isError } = useSelector(
  //   (store) => store.product
  // );
  // useEffect(() => {
  //   dispatch(fetchAllData());
  // }, []);

  // useEffect(() => {
  //   if (category) {
  //     dispatch(fetchAllData(category));
  //   } else {
  //     dispatch(fetchAllData());
  //   }
  // }, [category]);

  //Context
  const {productData, isLoading, isError} = useContext(ProductContext)

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <div class="sort">
        <div class="collection-sort">
          <label>Filter by:</label>
          <select onChange={handleCategory}>
            <option value="">All</option>
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
                <Link to={`/products/${product._id}`}>
                  <div className="product-image">
                    <img src={product.image} />
                  </div>
                  <div className="product-info">
                    <h5>{product.title}</h5>
                    <h6>${product.price}</h6>
                  </div>
                </Link>
              </div>
            );
          })}
      </section>
    </>
  );
}

export default ProductLayout;
