import "./productdetaillayout.css";
import { useFetch } from "../../hooks";
import {useParams} from 'react-router-dom'

function ProductDetailLayout() {
  const {productID} = useParams();
  const { productData, isLoading, isError } = useFetch(`http://localhost:4000/api/products/${productID}`);

  return (
    <>
      {isLoading && <h1>Loading...</h1>}

      {!isLoading && isError && <h1>Some error occured. Please try again.</h1>}

      {!isLoading &&
        !isError &&
        productData &&
        productData.map((product) => {
          return (
            <section class="product">
              <div class="product__photo">
                <div class="photo-container">
                  <div class="photo-main">
                    <div class="controls">
                      <i class="material-icons">share</i>
                      <i class="material-icons">favorite_border</i>
                    </div>
                    <img
                      src={"https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png"}
                      alt="green apple slice"
                    />
                  </div>
                  <div class="photo-album">
                    <ul>
                      <li>
                        <img
                          src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png"
                          alt="green apple"
                        />
                      </li>
                      <li>
                        <img
                          src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png"
                          alt="half apple"
                        />
                      </li>
                      <li>
                        <img
                          src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png"
                          alt="green apple"
                        />
                      </li>
                      <li>
                        <img
                          src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png"
                          alt="apple top"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="product__info">
                <div class="title">
                  <h1>{product.title}</h1>
                  <span>COD: 45999</span>
                </div>
                <div class="price">
                  R$ <span>{product.price}</span>
                </div>
                <div class="variant">
                  <h3>SELECT A COLOR</h3>
                  <ul>
                    <li>
                      <img
                        src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png"
                        alt="green apple"
                      />
                    </li>
                    <li>
                      <img
                        src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png"
                        alt="yellow apple"
                      />
                    </li>
                    <li>
                      <img
                        src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png"
                        alt="orange apple"
                      />
                    </li>
                    <li>
                      <img
                        src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png"
                        alt="red apple"
                      />
                    </li>
                  </ul>
                </div>
                <div class="description">
                  <h3>BENEFITS</h3>
                  <ul>
                    <li>Apples are nutricious</li>
                    <li>Apples may be good for weight loss</li>
                    <li>Apples may be good for bone health</li>
                    <li>They're linked to a lowest risk of diabetes</li>
                  </ul>
                </div>
                <button class="buy--btn">ADD TO CART</button>
              </div>
            </section>
          );
        })}
    </>
  );
}

export default ProductDetailLayout;
