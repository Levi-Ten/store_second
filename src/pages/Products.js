import React, { useEffect, useState } from "react";
import { api_products } from "../api/Api";
import { useParams } from "react-router-dom";
import "../scss/products.scss";
import Header from "../components/Header";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Products() {
  let { category } = useParams(); // используем для отображения категорий с товарами, будет работать только для тех Route у которых есть ":"
  // console.log(category);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    try {
      const request = async () => {
        await fetch(api_products)
          .then((res) => res.json())
          .then((json) => setProducts(json));
      };
      request();
    } catch (error) {
      console.log("mistake");
    }
  }, []);
  console.log(products);
  // const getProduct = products?.filter(
  //   (product) => product.category === category
  // );
  // console.log(getProduct);

  // const stuff = getProduct?.map((item, index) => {
  //   return (
  //     <div>
  //       <h3>{item.title}</h3>
  //       <div className="goods__picture">
  //         <img src={item.image} alt={item.title}></img>
  //       </div>
  //       <p>{item.rating.rate}</p>
  //       <p>{item.price}$</p>
  //       <div>
  //         <button>add</button>
  //       </div>
  //     </div>
  //   );
  // });

  const goods = products.map ((product, index)=>{
      // rating
      const rating = product.rating.rate
      const totalRating = 5;
      const realRating = rating / totalRating * 100;
      // console.log(realRating);
      // console.log(rating);
      // console.log(products)
      function addProduct() {
        console.log(product.id);
        const item = {
          id: product.id,
          img: product.image,
          title: product.title,
          price: product.price,
          quantity: 1,
          commonPrice: product.price,
        }
        const arrayItem = JSON.parse(localStorage.getItem('basketItem')) || [];
        arrayItem.push(item)
        localStorage.setItem("basketItem", JSON.stringify(arrayItem));
      } 
      if (product.category === category) {
          return (
              <div className="product">
                  <h2>{product.title}</h2>
                  <div className='product__picture'>
                      <img className="product__picture-img" src={product.image} alt={product.title}></img>
                  </div>
                  <div className="rating">
                    <div className="stars"></div>
                    <div className="color__stars" style={{width:realRating}}></div>
                    <p>{product.rating.rate}</p>
                  </div>
                  <div className="details">
                    <p className="price">{product.price}$</p>
                    <button className="btn" onClick={addProduct}>add</button>
                  </div>
              </div>
          )
      }
  })

  return (
    // <>{goods}</>
    <>
      <Header />
      <div className="goods">{goods}</div>
      {/* <>{stuff}</> */}
    </>
  );
}

export default Products;
