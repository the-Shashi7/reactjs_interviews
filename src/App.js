import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [pages,setPages] = useState(1);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=150")
      .then((res) => res.json())
      .then((json) => {setProducts(json.products);
      });
  }, []);

  function SelectPageHandler(page){
    setPages(page);
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  return (
    <>
    <div className="App">
      {products.slice(pages*12-12,pages*12).map((product) => {
        return (
          <span className="product" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
          </span>
        );
      })}
    </div>
    <div className="btn-container">
      {pages>1&&
      <button className="btn" onClick={()=>SelectPageHandler(pages-1)}>➡️</button>
      }
      {[...Array(Math.floor(products.length/12)+1)].map((_,i) => {
          return <button className="btn" key={i} onClick={(e)=>SelectPageHandler(i+1)} >{i+1}</button>
        })}
      {
        pages<(Math.floor(products.length/12)+1)&&
        <button className="btn" onClick={()=>SelectPageHandler(pages+1)} >⬅️</button>
      }
    </div>
    </>
  );
}

export default App;
