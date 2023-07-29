import React from "react";
import Carousel from "react-bootstrap/Carousel";

import ItemList from "./ItemList";
import cartContext from "./CartContext";
import { useContext } from "react";

function Home() {
    const { state } = useContext(cartContext);
    return (
      <div>
        <Carousel fade>
          <Carousel.Item>
            
            <Carousel.Caption>
              <h3>Biggest Sale of Year</h3>
              <h4>Get extra 10% discount on SBI Cards .</h4>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <ItemList products={state.products} />
      </div>
    );
  }
  
  export default Home();