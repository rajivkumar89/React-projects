import axios from "axios";
import { useEffect, useState } from "react"; // Import useEffect and useState
import Category from "./Category";
import { Link } from "react-router-dom";
 
function Shop() {
  let [finalCategory,setFinalCategory]=useState([])
  let [finalPro,setFinalPro]=useState([])
  let [catName, setCatName]=useState('')
  // Fetch categories from the API
  const getCategory = () => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => res.data)
      .then((finalRes)=>{
        setFinalCategory(finalRes)
      })

  } 

  const getProduct = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((prores) => prores.data)
      .then((finalRes) => {
        setFinalPro(finalRes.products);  
      })

  };
  

  // Use useEffect to fetch categories once on component mount
  useEffect(() => {
    getCategory();
    getProduct();
  }, []);


  useEffect(() => {
    if (catName !== "") {
      axios
        .get(`https://dummyjson.com/products/category/${catName}`)
        .then((prores) => prores.data)
        .then((finalRes) => {
          setFinalPro(finalRes.products);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    }
  }, [catName]);
  
  
  let pItems = finalPro.map((product, i) => {
    return (
        <ProductItems key={i}  pdata={product}/>
    );
  });
  return (
    <>
      <section className="shop">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="sidebar">
                <Category finalCategory={finalCategory} setCatName={setCatName}/>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="products-area">
                      {pItems}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ProductItems({pdata}) {
    console.log({pdata})
  return (
    <div className="product-item">
     { <img
        src={pdata.thumbnail}
      />}
      <h2>{pdata.title}</h2>
      <p>
        {pdata.description}
      </p>
      <div className="bottom-bar">
        <p>{pdata.price}</p>
        <Link to="/">Add to Cart</Link>
      </div>
    </div>
  );
}

export default Shop;
