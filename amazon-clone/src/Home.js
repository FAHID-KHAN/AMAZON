import React from "react";
import Product from "./Product";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2017/Acquisition/OandO/Weblab/SlashPVtop/C/1078329_apv_slashpv_desktop_watchnow_1500x300.jpg"
        alt=""
      />
      <Product
        id="12345"
        title="Mercedez Benz Car "
        Price={11.96}
        rating={5}
        image="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http%3A%2F%2Fcms.haymarketindia.net%2Fmodel%2Fuploads%2Fmodelimages%2FC-ClassModelImage.jpg&h=300&w=450&q=100"
      />
      ;
    </div>
  );
}

export default Home;
